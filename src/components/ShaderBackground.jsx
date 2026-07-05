"use client";
import React, { useEffect, useRef } from "react";

const ShaderBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animFrameId;
    let resizeObserver;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          
          // Create a slow, organic flowing motion
          float time = u_time * 0.2;
          
          // Base colors from the design system
          vec3 colorWhite = vec3(1.0, 1.0, 1.0);
          vec3 colorLightGray = vec3(0.97, 0.97, 0.97);
          vec3 colorGold = vec3(0.96, 0.70, 0.21); // #F5B335
          
          // Layer 1: Subtle noise/wave for background depth
          float n1 = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time * 0.5);
          float n2 = sin(uv.y * 4.0 - time * 0.8) * cos(uv.x * 3.0 + time * 0.3);
          float noise = (n1 + n2) * 0.5;
          
          // Layer 2: Soft flowing gradient
          vec3 color = mix(colorWhite, colorLightGray, uv.y + noise * 0.1);
          
          // Layer 3: Subtle golden aura highlights
          float aura = smoothstep(0.4, 0.0, length(uv - vec2(0.8, 0.2) + vec2(sin(time)*0.1, cos(time)*0.1)));
          color = mix(color, colorGold, aura * 0.03);
          
          // Layer 4: Floating "light" follow
          vec2 mouseNorm = u_mouse / u_resolution;
          float dist = length(uv - mouseNorm);
          float highlight = smoothstep(0.3, 0.0, dist);
          color += colorGold * highlight * 0.02;

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertexShader = cs(gl.VERTEX_SHADER, vs);
    const fragmentShader = cs(gl.FRAGMENT_SHADER, fs);

    const prog = gl.createProgram();
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("WebGL Program Link Error", gl.getProgramInfoLog(prog));
      return;
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    function render(t) {
      if (!canvas || !gl) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrameId = requestAnimationFrame(render);
    }
    
    render(0);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver && canvas) {
        resizeObserver.unobserve(canvas);
      }
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 block">
      <canvas ref={canvasRef} className="block w-full h-full" id="shader-canvas-ANIMATION_10" />
    </div>
  );
};

export default ShaderBackground;
