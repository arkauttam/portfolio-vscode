import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Code2,
  Cpu,
  Zap
} from "lucide-react";
import { TabId } from "../layout/VSCodeLayout";
import * as THREE from "three";

interface WelcomeTabProps {
  onFileClick: (tabId: TabId) => void;
}

export function WelcomeTab({ onFileClick }: WelcomeTabProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    /* -------- PARTICLES -------- */
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;

    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 20;

      const r = Math.random();
      if (r < 0.33) {
        colorsArray[i] = 0.33;
        colorsArray[i + 1] = 0.61;
        colorsArray[i + 2] = 0.84;
      } else if (r < 0.66) {
        colorsArray[i] = 0.31;
        colorsArray[i + 1] = 0.79;
        colorsArray[i + 2] = 0.69;
      } else {
        colorsArray[i] = 0.77;
        colorsArray[i + 1] = 0.53;
        colorsArray[i + 2] = 0.75;
      }
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorsArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    /* -------- SHAPES -------- */
    const shapes: THREE.Mesh[] = [];

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.3, 16, 100),
      new THREE.MeshBasicMaterial({
        color: 0x569cd6,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      })
    );
    torus.position.set(-3, 1, -2);
    scene.add(torus);
    shapes.push(torus);

    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.MeshBasicMaterial({
        color: 0xc586c0,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      })
    );
    icosahedron.position.set(3, -1, -2);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    const octahedron = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.9, 0),
      new THREE.MeshBasicMaterial({
        color: 0x4ec9b0,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      })
    );
    octahedron.position.set(0, 2, -3);
    scene.add(octahedron);
    shapes.push(octahedron);

    /* -------- MOUSE -------- */
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      const t = clock.getElapsedTime();

      particlesMesh.rotation.y = t * 0.05;
      particlesMesh.rotation.x = t * 0.03;

      shapes.forEach((shape, i) => {
        shape.rotation.x = t * (0.3 + i * 0.1);
        shape.rotation.y = t * (0.2 + i * 0.15);
        shape.position.y += Math.sin(t * 2 + i) * 0.001;
      });

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "React & TypeScript Specialist",
    "AI-Driven UI Engineer",
    "Full-Stack MERN Developer",
    "AI Software Engineer",
    "Next.js Developer",
    "React Developer",
    "UI/UX Developer"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1E1E1E]">
      {/* THREE CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-12">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#252526] border border-[#333333] rounded-full mb-6">
            <Zap size={16} className="text-[#9CDCFE]" />
            <span className="text-sm text-[#9CDCFE]">
              Available for Opportunities
            </span>
          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#569CD6] via-[#4EC9B0] to-[#C586C0] bg-clip-text text-transparent">
              Uttam Ghosh
            </span>
          </h1>

          {/* ROLE */}

          <div className="my-4 overflow-hidden text-2xl md:text-3xl mb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="
                  mb-3 font-medium
                  bg-gradient-to-r
                  from-[#fd8803] via-[#e7ab66] to-[#042b50]
                  bg-clip-text text-transparent
                "
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>



          {/* DESC */}
          <p className="text-lg text-[#d5d7d8] mb-12 max-w-2xl mx-auto">
            Crafting intelligent solutions with{" "}
            <span className="text-[#4EC9B0] font-semibold">MERN Stack</span>,{" "}
            <span className="text-[#C586C0] font-semibold">Next.js</span>, and{" "}
            <span className="text-[#569CD6] font-semibold">Production AI</span>
          </p>

          {/* CTA BUTTONS (UNCHANGED STRUCTURE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              style={{
                boxShadow: "0 0 25px rgba(86,156,214,0.45)"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(86,156,214,0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFileClick("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#0E639C] to-[#1177BB] text-white rounded-xl font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1177BB] to-[#0E639C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Sparkles size={20} />
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>


            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onFileClick('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2" >
              <Terminal size={20} />
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full"
        >
          {[
            { icon: Code2, label: "Years Experience", value: "2+", color: "from-[#569CD6] to-[#4EC9B0]" },
            { icon: Sparkles, label: "Projects Delivered", value: "50+", color: "from-[#4EC9B0] to-[#6A9955]" },
            { icon: Cpu, label: "AI Models Deployed", value: "100+", color: "from-[#C586C0] to-[#CE9178]" },
            { icon: Zap, label: "Client Satisfaction", value: "99%", color: "from-[#CE9178] to-[#C586C0]" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#569CD6]/20 to-[#C586C0]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 bg-[#252526]/60 backdrop-blur-sm border border-[#333333] rounded-2xl hover:border-[#4EC9B0] transition-all">

                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#9DA1A6]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TECH STACK TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl"
        >
          {[
            "MERN Stack",
            "Next.js",
            "React.js",
            "LangChain",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Three.js",
            "Framer Motion",
            "Git & GitHub",
            "Production AI"
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-[#252526] border border-[#333333] rounded-full text-sm text-[#D4D4D4] hover:border-[#4EC9B0] hover:text-[#4EC9B0] transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
