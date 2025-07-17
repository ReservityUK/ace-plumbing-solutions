// components/ServiceTemplate.tsx
import { ReactNode } from "react";

type ServiceTemplateProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceTemplate() {
  return (
    <div className="w-full mx-auto h-44 mt-32 lg:rounded-3xl flex justify-center items-center relative overflow-hidden bg-black">
  {/* Image layer */}
  <div className="absolute inset-0 opacity-50">
    <img
      src="https://images.unsplash.com/photo-1661044437616-71100c9f638e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content layer */}
  <div className="z-10 text-white text-4xl font-medium">Emergency Plumbing</div>
</div>

  );
}
