import { BusinessModal, CityModal, LocalityModal } from "_components";

export default function containers(Components) {
  const data = "Rajib Mandal";
  return () => (
    <>
      <Components value={data} />
      <BusinessModal />
      <CityModal />
      <LocalityModal />
    </>
  );
}
