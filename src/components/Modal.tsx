export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-scroll bg-black bg-opacity-40 transition-opacity duration-300`}
    >
      <div
        className={`mt-28 flex transform flex-col items-center justify-center rounded-2xl bg-white p-8 transition-transform duration-300`}
      >
        {children}
      </div>
    </div>
  );
}
