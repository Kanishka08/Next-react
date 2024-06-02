// our-domain.com/developer
import { useRouter } from "next/router";
// "use client";
function developerPage() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const router = useRouter();
  // const developerId = router.query.id;

  const { id } = router.query;

  const developer = details.find((data) => data.id === parseInt(id));
  return (
    <>
      {developer ? (
        <>
          <h1>name : {developer.name}</h1>
          <h3>role : {developer.role}</h3>
        </>
      ) : (
        <span>Developer doesn't exist</span>
      )}
    </>
  );
}
export default developerPage;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const details = [
//   { id: 1, name: "Yash", role: "Senior Developer" },
//   { id: 2, name: "Vaibhav", role: "Backend Developer" },
//   { id: 3, name: "Suresh", role: "Frontend Developer" },
// ];

// function AboutUsPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [developer, setDeveloper] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const dev = details.find((data) => data.id === parseInt(id));
//       setDeveloper(dev);
//     }
//   }, [id]);

//   if (!id) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {developer ? (
//         <>
//           <h1>Name: {developer.name}</h1>
//           <h3>Role: {developer.role}</h3>
//         </>
//       ) : (
//         <span>Developer doesn't exist</span>
//       )}
//     </>
//   );
// }

// export default AboutUsPage;
