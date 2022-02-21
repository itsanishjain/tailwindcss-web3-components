import React from "react";

export default function CircularLoading() {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700" />
    </div>
  );
}
