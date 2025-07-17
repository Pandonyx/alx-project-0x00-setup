import Button from "@/components/Button";
import React from  "react";

const Landing: React.FC =  () => {
  return (
    < div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-800">
        Button Component Showcase 
      </h1>

      {/* Button Sizes */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Sizes</h2>
        <div  className="flex justify-around p-6 bg-white rounded-lg shadow-md items-center">
          <Button title="Small" styles="text-sm py-1 px-3 rounded-md" />
          <Button title="Medium" styles="text-base py-2 px-4  rounded-md" />
          <Button title="Large" styles="text-lg py-3 px-6 rounded-md" />
        </div>
      </div>

      {/* Button Shapes */}
      <div className="w-full max-w-2xl ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Shapes</h2>
        <div className="flex justify-around p-6 bg-white rounded-lg shadow-md items-center">
          <Button title="S lightly Rounded" styles="py-2 px-4 rounded-sm" />
          <Button title="Default Rounded" styles="py-2 px-4 rounded-md" />
          <Button title="Pill Shaped" styles="py-2 px-4 rounded-full" /> 
        </div>
      </div>
    </div>
  )
}
export default Landing
