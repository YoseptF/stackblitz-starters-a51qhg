import { FC, ReactNode } from "react";

interface BodyWrapperProps {
  children: ReactNode;
}

const BodyWrapper: FC<BodyWrapperProps> = ({ children }) => (
  <section className="w-full h-full flex flex-col gap-3 items-center justify-between p-5">
    {children}
  </section>
);

export default BodyWrapper;