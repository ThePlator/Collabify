'use client';

import { useState } from 'react';
import {
  FaCamera,
  FaEdit,
  FaCheckCircle,
  FaUpload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUsers,
} from 'react-icons/fa';
import Image from 'next/image';

interface SkillTag {
  id: string;
  name: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

interface PortfolioItem {
  id: string;
  type: 'image' | 'pdf' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

interface BusinessInfo {
  companyName: string;
  website: string;
  teamSize: string;
  isVerified: boolean;
}

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: 'Rafiqur Rahman',
    role: 'Team Manager',
    location: 'Leeds, United Kingdom',
    email: 'rafiqurrahman51@gmail.com',
    phone: '+09 345 346 44',
    bio: 'Team Manager',
    name1: 'John Doe',
    role1: 'Business Owner',
    bio1: 'Passionate entrepreneur with 10+ years of experience in tech industry.',
    profileImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    skills: [
      { id: '1', name: 'Leadership' },
      { id: '2', name: 'Project Management' },
      { id: '3', name: 'Strategic Planning' },
    ] as SkillTag[],
    certifications: [
      {
        id: '1',
        name: 'Project Management Professional (PMP)',
        issuer: 'PMI',
        date: '2022',
        url: '#',
      },
    ] as Certification[],
    education: [
      {
        id: '1',
        institution: 'Stanford University',
        degree: 'Master of Business Administration',
        field: 'Business Administration',
        startYear: '2015',
        endYear: '2017',
      },
    ] as Education[],
    portfolio: [] as PortfolioItem[],
    businessInfo: {
      companyName: 'TechVision Solutions',
      website: 'www.techvision.com',
      teamSize: '50-100',
      isVerified: true,
    } as BusinessInfo,
  });

  const [editMode, setEditMode] = useState({
    business: false,
    bio: false,
    skills: false,
    education: false,
    certifications: false,
  });

  const handleImageUpload = () => {
    // Implement image upload logic
  };

  const handlePortfolioUpload = () => {
    // Implement portfolio item upload logic
  };

  const toggleEdit = (section: keyof typeof editMode) => {
    setEditMode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBusinessUpdate = (updates: Partial<BusinessInfo>) => {
    setProfileData((prev) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, ...updates },
    }));
    toggleEdit('business');
  };

  // const handleBioUpdate = (newBio: string) => {
  //   setProfileData((prev) => ({ ...prev, bio: newBio }));
  //   toggleEdit('bio');
  // };

  const handleSkillsUpdate = (newSkills: SkillTag[]) => {
    setProfileData((prev) => ({ ...prev, skills: newSkills }));
    toggleEdit('skills');
  };

  const handleEducationUpdate = (newEducation: Education[]) => {
    setProfileData((prev) => ({ ...prev, education: newEducation }));
    toggleEdit('education');
  };

  const handleCertificationsUpdate = (newCertifications: Certification[]) => {
    setProfileData((prev) => ({ ...prev, certifications: newCertifications }));
    toggleEdit('certifications');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Cover Image Section */}
          <div className="relative h-72 md:h-96 w-full group">
            <Image
              src={profileData.coverImage}
              alt="Cover"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50" />
            <button
              onClick={() => handleImageUpload()}
              className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
              <FaCamera className="w-5 h-5 text-[#3F1D9B]" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="relative -mt-32 px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <div className="relative group">
                <div className="w-48 h-48 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                  <Image
                    src={profileData.profileImage}
                    alt={profileData.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <button
                  onClick={() => handleImageUpload()}
                  className="absolute bottom-3 right-3 p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  <FaCamera className="w-4 h-4 text-[#3F1D9B]" />
                </button>
              </div>

              <div className="flex-1 space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {profileData.name}
                      </h1>
                      {profileData.businessInfo.isVerified && (
                        <FaCheckCircle className="w-6 h-6 text-[#3F1D9B]" />
                      )}
                    </div>
                    <p className="text-xl text-gray-600 font-medium">
                      {profileData.role}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                  </div>

                  <button className="px-8 py-3 bg-[#3F1D9B] text-white rounded-xl hover:bg-[#2D0E81] transition-all duration-200 flex items-center gap-3 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:scale-105">
                    <FaEdit className="w-4 h-4" />
                    <span className="font-medium">Edit Profile</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#3F1D9B]/10 flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-[#3F1D9B]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-900 font-medium truncate">
                        {profileData.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${profileData.phone}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#3F1D9B]/10 flex items-center justify-center">
                      <FaPhone className="w-5 h-5 text-[#3F1D9B]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-900 font-medium">
                        {profileData.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`https://${profileData.businessInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-full bg-[#3F1D9B]/10 flex items-center justify-center">
                      <FaGlobe className="w-5 h-5 text-[#3F1D9B]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <p className="text-gray-900 font-medium truncate">
                        {profileData.businessInfo.website}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Business Information
              </h2>
              <button
                onClick={() => toggleEdit('business')}
                className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>

            {editMode.business ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={profileData.businessInfo.companyName}
                  onChange={(e) =>
                    handleBusinessUpdate({ companyName: e.target.value })
                  }
                  className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  value={profileData.businessInfo.website}
                  onChange={(e) =>
                    handleBusinessUpdate({ website: e.target.value })
                  }
                  className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                  placeholder="Website"
                />
                <input
                  type="text"
                  value={profileData.businessInfo.teamSize}
                  onChange={(e) =>
                    handleBusinessUpdate({ teamSize: e.target.value })
                  }
                  className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                  placeholder="Team Size"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-gradient-to-br from-[#F4F0FF] to-white rounded-2xl border border-[#3F1D9B]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Company
                    </h3>
                    {profileData.businessInfo.isVerified && (
                      <FaCheckCircle className="w-5 h-5 text-[#3F1D9B]" />
                    )}
                  </div>
                  <p className="text-gray-600">
                    {profileData.businessInfo.companyName}
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#F4F0FF] to-white rounded-2xl border border-[#3F1D9B]/10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Team Size
                  </h3>
                  <div className="flex items-center gap-3">
                    <FaUsers className="w-5 h-5 text-[#3F1D9B]" />
                    <p className="text-gray-600">
                      {profileData.businessInfo.teamSize} employees
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#F4F0FF] to-white rounded-2xl border border-[#3F1D9B]/10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Website
                  </h3>
                  <a
                    href={`https://${profileData.businessInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3F1D9B] hover:underline">
                    {profileData.businessInfo.website}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div className="px-8 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Skills & Expertise
              </h2>
              <button
                onClick={() => toggleEdit('skills')}
                className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>

            {editMode.skills ? (
              <div className="space-y-4">
                {profileData.skills.map((skill, index) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => {
                        const newSkills = [...profileData.skills];
                        newSkills[index] = { ...skill, name: e.target.value };
                        handleSkillsUpdate(newSkills);
                      }}
                      className="flex-1 p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const newSkills = profileData.skills.filter(
                          (s) => s.id !== skill.id
                        );
                        handleSkillsUpdate(newSkills);
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newSkill = {
                      id: String(Date.now()),
                      name: '',
                    };
                    handleSkillsUpdate([...profileData.skills, newSkill]);
                  }}
                  className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81]">
                  Add Skill
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-[#F4F0FF] text-[#3F1D9B] rounded-xl font-medium hover:bg-[#3F1D9B] hover:text-white transition-colors duration-200 cursor-default">
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Education Section */}
          <div className="px-8 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              <button
                onClick={() => toggleEdit('education')}
                className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>

            {editMode.education ? (
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="space-y-4 p-4 border border-[#3F1D9B] rounded-lg">
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => {
                        const newEducation = [...profileData.education];
                        newEducation[index] = {
                          ...edu,
                          institution: e.target.value,
                        };
                        handleEducationUpdate(newEducation);
                      }}
                      className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                      placeholder="Institution"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const newEducation = [...profileData.education];
                          newEducation[index] = {
                            ...edu,
                            degree: e.target.value,
                          };
                          handleEducationUpdate(newEducation);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="Degree"
                      />
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => {
                          const newEducation = [...profileData.education];
                          newEducation[index] = {
                            ...edu,
                            field: e.target.value,
                          };
                          handleEducationUpdate(newEducation);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="Field of Study"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={edu.startYear}
                        onChange={(e) => {
                          const newEducation = [...profileData.education];
                          newEducation[index] = {
                            ...edu,
                            startYear: e.target.value,
                          };
                          handleEducationUpdate(newEducation);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="Start Year"
                      />
                      <input
                        type="text"
                        value={edu.endYear}
                        onChange={(e) => {
                          const newEducation = [...profileData.education];
                          newEducation[index] = {
                            ...edu,
                            endYear: e.target.value,
                          };
                          handleEducationUpdate(newEducation);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="End Year"
                      />
                    </div>
                    <button
                      onClick={() => {
                        const newEducation = profileData.education.filter(
                          (e) => e.id !== edu.id
                        );
                        handleEducationUpdate(newEducation);
                      }}
                      className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg">
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newEducation = {
                      id: String(Date.now()),
                      institution: '',
                      degree: '',
                      field: '',
                      startYear: '',
                      endYear: '',
                    };
                    handleEducationUpdate([
                      ...profileData.education,
                      newEducation,
                    ]);
                  }}
                  className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81]">
                  Add Education
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {profileData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="space-y-4 p-4 border border-[#3F1D9B] rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900">
                      {edu.institution}
                    </h3>
                    <p className="text-[#3F1D9B] font-medium mb-2">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-gray-500">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Certifications Section */}
          <div className="px-8 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Certifications
              </h2>
              <button
                onClick={() => toggleEdit('certifications')}
                className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>

            {editMode.certifications ? (
              <div className="space-y-6">
                {profileData.certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    className="space-y-4 p-4 border border-[#3F1D9B] rounded-lg">
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => {
                        const newCertifications = [
                          ...profileData.certifications,
                        ];
                        newCertifications[index] = {
                          ...cert,
                          name: e.target.value,
                        };
                        handleCertificationsUpdate(newCertifications);
                      }}
                      className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                      placeholder="Certification Name"
                    />
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => {
                        const newCertifications = [
                          ...profileData.certifications,
                        ];
                        newCertifications[index] = {
                          ...cert,
                          issuer: e.target.value,
                        };
                        handleCertificationsUpdate(newCertifications);
                      }}
                      className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                      placeholder="Issuer"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => {
                          const newCertifications = [
                            ...profileData.certifications,
                          ];
                          newCertifications[index] = {
                            ...cert,
                            date: e.target.value,
                          };
                          handleCertificationsUpdate(newCertifications);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="Date"
                      />
                      <input
                        type="text"
                        value={cert.url || ''}
                        onChange={(e) => {
                          const newCertifications = [
                            ...profileData.certifications,
                          ];
                          newCertifications[index] = {
                            ...cert,
                            url: e.target.value,
                          };
                          handleCertificationsUpdate(newCertifications);
                        }}
                        className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                        placeholder="URL (optional)"
                      />
                    </div>
                    <button
                      onClick={() => {
                        const newCertifications =
                          profileData.certifications.filter(
                            (c) => c.id !== cert.id
                          );
                        handleCertificationsUpdate(newCertifications);
                      }}
                      className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg">
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newCertification = {
                      id: String(Date.now()),
                      name: '',
                      issuer: '',
                      date: '',
                      url: '',
                    };
                    handleCertificationsUpdate([
                      ...profileData.certifications,
                      newCertification,
                    ]);
                  }}
                  className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81]">
                  Add Certification
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profileData.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="group p-6 bg-gradient-to-br from-[#F4F0FF] to-white rounded-2xl border border-[#3F1D9B]/10 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3F1D9B] transition-colors duration-200">
                          {cert.name}
                        </h3>
                        <p className="text-gray-500">{cert.issuer}</p>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                          <FaUpload className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600">Issued {cert.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Section */}
          <div className="px-8 py-10 border-t border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
              <button
                onClick={handlePortfolioUpload}
                className="p-2 text-[#3F1D9B] hover:bg-[#F4F0FF] rounded-lg transition-colors duration-200">
                <FaUpload className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.portfolio.map((item) => (
                <div
                  key={item.id}
                  className="relative group overflow-hidden rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-200">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold truncate">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{item.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
