interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ children, show, onClose }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 flex items-start justify-center bg-black bg-opacity-40 transition-opacity duration-300 overflow-y-scroll ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`mt-28 flex transform flex-col items-center justify-center rounded-2xl bg-white p-8 transition-transform duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
