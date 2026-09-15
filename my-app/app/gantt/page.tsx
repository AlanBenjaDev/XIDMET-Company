"use client";

import React, { useState, useMemo } from "react";

// Tipos de Datos
interface Task {
  id: string;
  name: string;
  assignee: string; // Responsable Principal
  collaborators?: string[]; // Campo Opcional: Otros colaboradores
  startDate: string; // Formato: YYYY-MM-DD
  endDate: string;   // Formato: YYYY-MM-DD
  status: "Completed" | "In Progress" | "Pending";
}

interface UserRank {
  name: string;
  completedTasks: number;
  totalTasks: number;
}

// Tareas Adaptadas con Colaboradores Opcionales
const INITIAL_TASKS: Task[] = [
  { 
    id: "1", 
    name: "Diseño Pagina Web", 
    assignee: "Alan Andrada", 
    startDate: "2026-06-26", 
    endDate: "2026-07-01", 
    status: "Completed" 
  },
  { 
    id: "2", 
    name: "Finalizacion Pagina Web Con proyectos e imagenes", 
    assignee: "Alan Andrada", 
    collaborators: ["Federico Sanchez"], // Opcional
    startDate: "2026-08-26", 
    endDate: "2026-08-26", 
    status: "Completed" 
  },
  { 
    id: "3", 
    name: "Creación plan de trabajo con criterios de medición a utilizar", 
    assignee: "Alan Andrada", 
    startDate: "2026-08-13", 
    endDate: "2026-08-19", 
    status: "Completed" 
  },
  { 
    id: "4", 
    name: "Inicio lumen", 
    assignee: "Alan Andrada",
    collaborators: ["Maximo Ceballos", "Mia Rodriguez" , "Joaquín Ferreyra", "Ignacio Gonzalez"], // Opcional
    startDate: "2026-08-20", 
    endDate: "2026-09-09", 
    status: "Completed" 
  },
  { 
    id: "5", 
    name: "Placa PCB", 
    assignee: "Federico Sanchez", 
    collaborators: ["Maximo Ceballos", "Ignacio Gonzalez"], // Opcional
    startDate: "2026-09-01", 
    endDate: "2026-09-03", 
    status: "Completed" 
  },
  { 
    id: "6", 
    name: "Hacer pines de la placa PCB", 
    assignee: "Maximo Ceballos", 
    collaborators: ["Ignacio Gonzalez"], // Opcional
    startDate: "2026-09-04", 
    endDate: "2026-09-07", 
    status: "Completed" 
  },
  { 
    id: "7", 
    name: "Impresión Caja", 
    assignee: "Mia Rodriguez",
    collaborators:["Joaquin Ferreyra"], 
    startDate: "2026-09-04", 
    endDate: "2026-09-08", 
    status: "In Progress" 
  },
  { 
    id: "8", 
    name: "Orden de trabajo", 
    assignee: "Mia Rodriguez", 
    startDate: "2026-09-07", 
    endDate: "2026-09-08", 
    status: "Completed" 
  },
  { 
    id: "9", 
    name: "Terminar de soldar la placa", 
    assignee: "Maximo Ceballos", 
    collaborators: ["Federico Sanchez"], // Opcional
    startDate: "2026-09-08", 
    endDate: "2026-09-09", 
    status: "Completed" 
  },
  { 
    id: "10", 
    name: "Terminar el sistema de timbre autónomo escolar", 
    assignee: "Alan Andrada", 
    startDate: "2026-09-09", 
    endDate: "2026-09-12", 
    status: "Completed" 
  },
  { 
    id: "11", 
    name: "Presupuesto Timbre", 
    assignee: "Federico Sanchez", 
    startDate: "2026-09-09", 
    endDate: "2026-09-10", 
    status: "Completed" 
  },
  { 
    id: "12", 
    name: "Final Informe de Inversor de tensión", 
    assignee: "Federico Sanchez",
    collaborators: ["Alan Andrada"], 
    startDate: "2026-09-09", 
    endDate: "2026-09-10", 
    status: "Completed" 
  },
  { 
    id: "13", 
    name: "Final Informe de Metodo Lumen", 
    assignee: "Federico Sanchez", 
    collaborators:["Alan Andrada"],
    startDate: "2026-09-09", 
    endDate: "2026-09-10", 
    status: "Completed" 
  },
  { 
    id: "14", 
    name: "Diseñar Diagrama de gant dinamico en la pagina Web", 
    assignee: "Alan Andrada", 
    startDate: "2026-09-14", 
    endDate: "2026-09-15", 
    status: "Completed" 
  },
];

// Generar dinámicamente el rango de días (13/08 al 15/09)
const GENERATE_DAYS = () => {
  const days: string[] = [];
  for (let i = 13; i <= 31; i++) {
    days.push(`2026-08-${i < 10 ? "0" + i : i}`);
  }
  for (let i = 1; i <= 15; i++) {
    days.push(`2026-09-${i < 10 ? "0" + i : i}`);
  }
  return days;
};

const DAYS_RANGE = GENERATE_DAYS();

export default function GanttRankingPage() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  // Calcular Posición y Ancho en el Gantt
  const getGanttStyle = (startDate: string, endDate: string) => {
    const startIdx = DAYS_RANGE.indexOf(startDate);
    const endIdx = DAYS_RANGE.indexOf(endDate);

    if (startIdx === -1 || endIdx === -1) return { display: "none" };

    const leftPercent = (startIdx / DAYS_RANGE.length) * 100;
    const widthPercent = ((endIdx - startIdx + 1) / DAYS_RANGE.length) * 100;

    return {
      left: `${leftPercent}%`,
      width: `${widthPercent}%`,
    };
  };

  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus =
            t.status === "Pending"
              ? "In Progress"
              : t.status === "In Progress"
              ? "Completed"
              : "Pending";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  // Cálculo de Ranking sumando a Responsables y Colaboradores
  const userRanking = useMemo<UserRank[]>(() => {
    const map = new Map<string, { completed: number; total: number }>();

    const addScore = (personName: string, isCompleted: boolean) => {
      const current = map.get(personName) || { completed: 0, total: 0 };
      map.set(personName, {
        completed: current.completed + (isCompleted ? 1 : 0),
        total: current.total + 1,
      });
    };

    tasks.forEach((task) => {
      const isDone = task.status === "Completed";
      // Sumar al responsable principal
      addScore(task.assignee, isDone);
      
      // Sumar a cada colaborador opcional si existe
      if (task.collaborators && task.collaborators.length > 0) {
        task.collaborators.forEach((collab) => addScore(collab, isDone));
      }
    });

    return Array.from(map.entries())
      .map(([name, stats]) => ({
        name,
        completedTasks: stats.completed,
        totalTasks: stats.total,
      }))
      .sort((a, b) => b.completedTasks - a.completedTasks);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 space-y-8">
      <header className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-sky-400">Panel de Gantt & Leaderboard</h1>
        <p className="text-slate-400 text-sm">Gestión visual de tareas y rendimiento del equipo.</p>
      </header>

      {/* SECCIÓN 1: RANKING / LEADERBOARD */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg">
        <h2 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
          🏆 Ranking de Productividad (Incluye Colaboraciones)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {userRanking.map((user, idx) => (
            <div
              key={user.name}
              className="bg-slate-900 border border-slate-700 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">Puesto #{idx + 1}</div>
                <div className="font-medium text-slate-200 truncate max-w-[120px]">{user.name}</div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-400">{user.completedTasks}</span>
                <span className="text-xs text-slate-400"> / {user.totalTasks}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: DIAGRAMA DE GANTT */}
      <section className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg overflow-x-auto">
        <h2 className="text-lg font-semibold text-sky-400 mb-4">📅 Cronograma de Proyecto (Agosto - Septiembre)</h2>
        
        <div className="min-w-[1200px]">
          {/* Cabecera de Días */}
          <div className="grid grid-cols-12 gap-0 border-b border-slate-700 pb-2 mb-4 text-xs font-mono text-slate-400">
            <div className="col-span-3 font-semibold">Tarea / Asignados</div>
            <div className="col-span-9 grid text-center" style={{ gridTemplateColumns: `repeat(${DAYS_RANGE.length}, minmax(0, 1fr))` }}>
              {DAYS_RANGE.map((day) => (
                <div key={day} className="border-r border-slate-700/50 text-[10px]" title={day}>
                  {day.split("-")[2]}
                </div>
              ))}
            </div>
          </div>

          {/* Filas de Tareas */}
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="grid grid-cols-12 gap-0 items-center text-sm py-1">
                {/* Info de la Tarea y Colaboradores */}
                <div className="col-span-3 pr-2">
                  <div className="font-medium text-slate-200 truncate" title={task.name}>{task.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate font-semibold text-slate-300">{task.assignee}</span>
                      <button
                        onClick={() => toggleTaskStatus(task.id)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          task.status === "Completed"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            : task.status === "In Progress"
                            ? "bg-amber-950 text-amber-400 border border-amber-800"
                            : "bg-slate-950 text-slate-400 border border-slate-800"
                        }`}
                      >
                        {task.status}
                      </button>
                    </div>

                    {/* Muestra los colaboradores opcionales en la tarjeta */}
                    {task.collaborators && task.collaborators.length > 0 && (
                      <div className="text-[10px] text-sky-400/80 truncate">
                        👥 Colab: {task.collaborators.join(", ")}
                      </div>
                    )}
                  </div>
                </div>

                {/* Barra de Tiempo (Gantt) */}
                <div className="col-span-9 bg-slate-900 h-8 rounded relative border border-slate-700/50 overflow-hidden">
                  <div
                    className={`absolute top-1 bottom-1 rounded transition-all duration-300 ${
                      task.status === "Completed"
                        ? "bg-emerald-500/80 border border-emerald-400"
                        : task.status === "In Progress"
                        ? "bg-amber-500/80 border border-amber-400"
                        : "bg-slate-600/50 border border-slate-500"
                    }`}
                    style={getGanttStyle(task.startDate, task.endDate)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}