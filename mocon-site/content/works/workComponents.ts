import { MockData } from "@/components/sections/works/work/MockData";
import { MoconWorks } from "@/components/sections/works/work/MoconWorks";
import { PythonSystem } from "@/components/sections/works/work/PythonSystem";
import React from "react";
import { WorkProps } from "./workList";


export const workComponents: Record<string, React.ComponentType<WorkProps>> = {
  "1": MoconWorks,
  "2": PythonSystem,
  "3": MockData,
}

