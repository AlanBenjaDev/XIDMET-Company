'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // 1. ESCENA, CÁMARA Y RENDERER
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020617, 0.035)

    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.set(0, 0, 14)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const disposables: Array<{ dispose: () => void }> = []

    // 2. RED ESPACIAL DE NODOS Y CONEXIONES (Sutil y elegante)
    const nodeCount = 75
    const nodePositions: THREE.Vector3[] = []
    const nodeVelocities: THREE.Vector3[] = []
    const nodeGeo = new THREE.SphereGeometry(0.055, 8, 8)
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.55,
    })
    disposables.push(nodeGeo, nodeMat)

    const networkGroup = new THREE.Group()
    const nodeMeshes: THREE.Mesh[] = []

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 12 - 2
      )
      nodePositions.push(pos)
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.005
        )
      )

      const mesh = new THREE.Mesh(nodeGeo, nodeMat)
      mesh.position.copy(pos)
      networkGroup.add(mesh)
      nodeMeshes.push(mesh)
    }
    scene.add(networkGroup)

    // Geometría dinámica para las líneas entre nodos cercanos
    const maxSegments = (nodeCount * (nodeCount - 1)) / 2
    const linePositions = new Float32Array(maxSegments * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.16,
    })
    const connectionLines = new THREE.LineSegments(lineGeo, lineMat)
    networkGroup.add(connectionLines)
    disposables.push(lineGeo, lineMat)

    // 3. FIGURAS GEOMÉTRICAS MINIMALISTAS FLOTANTES EN LOS BORDES (Poliedros wireframe finos)
    const floatingShapes: Array<{
      mesh: THREE.LineSegments
      rotSpeedX: number
      rotSpeedY: number
      floatOffset: number
      baseY: number
    }> = []

    const shapeConfigs = [
      { geo: new THREE.OctahedronGeometry(0.95, 0), pos: [-7.5, 3.2, -2], color: 0x10b981, opacity: 0.25 },
      { geo: new THREE.IcosahedronGeometry(1.15, 0), pos: [7.8, -2.8, -3], color: 0x0ea5e9, opacity: 0.22 },
      { geo: new THREE.TetrahedronGeometry(0.85, 0), pos: [6.8, 3.6, -4], color: 0x34d399, opacity: 0.2 },
      { geo: new THREE.OctahedronGeometry(0.8, 0), pos: [-7.2, -3.4, -3.5], color: 0x38bdf8, opacity: 0.2 },
    ]

    shapeConfigs.forEach((cfg, idx) => {
      const edgesGeo = new THREE.EdgesGeometry(cfg.geo)
      const edgesMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
      })
      const wireMesh = new THREE.LineSegments(edgesGeo, edgesMat)
      wireMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2])
      scene.add(wireMesh)

      floatingShapes.push({
        mesh: wireMesh,
        rotSpeedX: 0.15 + idx * 0.04,
        rotSpeedY: 0.2 + idx * 0.05,
        floatOffset: idx * 1.6,
        baseY: cfg.pos[1],
      })

      disposables.push(cfg.geo, edgesGeo, edgesMat)
    })

    // 4. PARTÍCULAS AMBIENTALES DE FONDO
    const particleCount = 160
    const particleGeo = new THREE.BufferGeometry()
    const particleCoords = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 30
      particleCoords[i + 1] = (Math.random() - 0.5) * 18
      particleCoords[i + 2] = (Math.random() - 0.5) * 14 - 2
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3))

    const particleMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
    })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)
    disposables.push(particleGeo, particleMat)

    // 5. INTERACCIÓN SUAVE CON CURSOR Y RESIZE
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1
        mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
      }
    }

    const onResize = () => {
      if (!container || !canvas) return
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('resize', onResize)

    // 6. LOOP DE ANIMACIÓN
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      mouse.x += (mouse.targetX - mouse.x) * 0.04
      mouse.y += (mouse.targetY - mouse.y) * 0.04

      // Paralaje suave de la red según el movimiento del mouse
      networkGroup.rotation.y = mouse.x * 0.08 + elapsed * 0.015
      networkGroup.rotation.x = -mouse.y * 0.05

      // Actualizar movimiento orgánico de nodos y reconectar líneas
      let vertexIndex = 0
      for (let i = 0; i < nodeCount; i++) {
        const p = nodePositions[i]
        const v = nodeVelocities[i]
        p.add(v)

        if (Math.abs(p.x) > 14) v.x *= -1
        if (Math.abs(p.y) > 8) v.y *= -1
        if (p.z > 4 || p.z < -8) v.z *= -1

        nodeMeshes[i].position.copy(p)

        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = nodePositions[j]
          if (p.distanceTo(p2) < 4.2) {
            linePositions[vertexIndex++] = p.x
            linePositions[vertexIndex++] = p.y
            linePositions[vertexIndex++] = p.z
            linePositions[vertexIndex++] = p2.x
            linePositions[vertexIndex++] = p2.y
            linePositions[vertexIndex++] = p2.z
          }
        }
      }

      lineGeo.setDrawRange(0, vertexIndex / 3)
      lineGeo.attributes.position.needsUpdate = true

      // Rotación y flotación de los poliedros periféricos
      floatingShapes.forEach((s) => {
        s.mesh.rotation.x = elapsed * s.rotSpeedX
        s.mesh.rotation.y = elapsed * s.rotSpeedY
        s.mesh.position.y = s.baseY + Math.sin(elapsed * 0.9 + s.floatOffset) * 0.35
      })

      particleSystem.rotation.y = -elapsed * 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', onResize)
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}