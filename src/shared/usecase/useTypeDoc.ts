import KTPImage from "@/assets/images/ktp.png";
import SIMImage from "@/assets/images/sim.png";
import AktaImage from "@/assets/images/akta.png";
import LainnyaImage from "@/assets/images/lainnya.png";

export function useTypeDoc(type: "SIM" | "KTP" | "AKTA") {
  const typeDoc = (() => {
    switch (type) {
      case "KTP":
        return { text: "Kartu Tanda Penduduk", image: KTPImage };
      case "SIM":
        return { text: "Surat Izin Mengemudi", image: SIMImage };
      case "AKTA":
        return { text: "Akta Kelahiran", image: AktaImage };
      default:
        return { text: type, image: LainnyaImage };
    }
  })();
  return typeDoc;
}
