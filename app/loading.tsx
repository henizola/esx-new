export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <h1
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "99999999",
        backgroundColor: "white",
      }}
    ></h1>
  );
}
