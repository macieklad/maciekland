import Shell from "./Shell.tsx";

export default function Post({ children }: React.PropsWithChildren) {
  return (
    <Shell>
      {children}
    </Shell>
  );
}
