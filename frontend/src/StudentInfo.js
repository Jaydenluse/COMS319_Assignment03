export const StudentInfo = () => {
  return (
    <div className="mt-2">
      <h3 className="text-2xl">Project Information</h3>
      <p>
        The enclosed project demonstrates a stable database connection between a
        React web application and a MongoDB server. This connection is done via.
        an Express.js REST API. We demonstrate the different CRUD (Create, Read,
        Update, Delete) functionalities for a fake product catalog through these
        POST, GET, PUT, and DELETE endpoints. If you are getting started with
        the project for the first time, you can run the backend's index.js file
        to populate the database! Thank you!
      </p>
      <h3 className="text-2xl">Student Information</h3>
      <p>
        <strong>Name:</strong> Ryan Huellen
      </p>
      <p>
        <strong>Email:</strong> rhuellen@iastate.edu
      </p>
      <br />
      <p>
        <strong>Name:</strong> Jayden Luse
      </p>
      <p>
        <strong>Email:</strong> jcluse@iastate.edu
      </p>
      <br />
      <h3 className="text-2xl">Course Information</h3>
      <p>
        <strong>Course:</strong> COM S 319
      </p>
      <p>
        <strong>Date:</strong> December 10, 2023
      </p>
      <p>
        <strong>Professor:</strong> Dr. Abraham Aldaco
      </p>
    </div>
  );
};
