import { useFormSelectors } from "@/store";

export const HeaderImage = () => {
  const theme = useFormSelectors.use.theme();
  return (
    <>
      {theme.Header.image && (
        <div className="w-full h-[150px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={theme.Header.image.dataUrl}
            className="h-full w-full rounded-md"
            alt="Header Image"
          />
        </div>
      )}
    </>
  );
};
