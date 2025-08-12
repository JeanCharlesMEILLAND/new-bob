import clsx from "clsx";

type WhiteGradientProps = {
  className?: string;
};

export const WhiteGradient = ({className}: WhiteGradientProps) => {
  return (
      <div
          className={clsx(
              "absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_200%_at_50%_35%,white_22%,transparent_70%)]",
              className
          )}
      />
  );
};