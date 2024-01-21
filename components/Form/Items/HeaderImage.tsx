import { Loader } from "@/assets/svg";
import { useFormSelectors } from "@/store";
import { useState } from "react";

export const HeaderImage = () => {
  const theme = useFormSelectors.use.theme();
  const [loading, setLoading] = useState(true);
  if (!theme.Header.image) return null;

  return (
    <div className="w-full h-[150px]">
      {loading && (
        <div className="h-full w-full bg-white flex justify-center items-center rounded-lg opacity-50">
          <Loader />
        </div>
      )}
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        onLoad={() => {
          console.log("loaded");
          setLoading(false);
        }}
        onLoadedData={() => setLoading(false)}
        src={theme.Header.image.dataUrl}
        className="h-full w-full rounded-md"
        alt="Header Image"
      />
    </div>
  );
};
