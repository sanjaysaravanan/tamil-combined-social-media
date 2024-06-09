import { useState } from "react";

const Profile = () => {
  const initialProfile = {
    name: "John Doe",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dob: "1990-01-01",
    email: "johndoe@example.com",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState(initialProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handleEdit = () => {
    setEditMode(true);
    setTempProfile(profile);
  };

  const handleCancel = () => {
    setEditMode(false);
    setTempProfile(profile);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">Profile Information</div>
            <div className="card-body">
              {!editMode ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <div>{profile.name}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <div>
                      <img
                        src={profile.image}
                        alt="Profile"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <div>{profile.description}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <div>{profile.dob}</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <div>{profile.email}</div>
                  </div>
                  <button className="btn btn-primary me-2" onClick={handleEdit}>
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={tempProfile.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={tempProfile.image}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={tempProfile.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={tempProfile.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={tempProfile.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className="btn btn-success me-2" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
