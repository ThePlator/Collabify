'use client';

import { useState } from 'react';
import { FaCamera, FaEdit, FaCheckCircle, FaUpload } from 'react-icons/fa';

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
    name: 'John Doe',
    role: 'Business Owner',
    bio: 'Passionate entrepreneur with 10+ years of experience in tech industry.',
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
    certifications: false
  });

  const handleImageUpload = (type: 'profile' | 'cover') => {
    // Implement image upload logic
  };

  const handlePortfolioUpload = () => {
    // Implement portfolio item upload logic
  };

  const toggleEdit = (section: keyof typeof editMode) => {
    setEditMode(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBusinessUpdate = (updates: Partial<BusinessInfo>) => {
    setProfileData(prev => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, ...updates }
    }));
    toggleEdit('business');
  };

  const handleBioUpdate = (newBio: string) => {
    setProfileData(prev => ({ ...prev, bio: newBio }));
    toggleEdit('bio');
  };

  const handleSkillsUpdate = (newSkills: SkillTag[]) => {
    setProfileData(prev => ({ ...prev, skills: newSkills }));
    toggleEdit('skills');
  };

  const handleEducationUpdate = (newEducation: Education[]) => {
    setProfileData(prev => ({ ...prev, education: newEducation }));
    toggleEdit('education');
  };

  const handleCertificationsUpdate = (newCertifications: Certification[]) => {
    setProfileData(prev => ({ ...prev, certifications: newCertifications }));
    toggleEdit('certifications');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F0FF] to-[#FDFDFF]">
      {/* Cover Image Section */}
      <div className="relative h-64 md:h-80 w-full">
        <img
          src={profileData.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => handleImageUpload('cover')}
          className="absolute bottom-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200">
          <FaCamera className="w-5 h-5 text-[#3F1D9B]" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="relative">
          <div className="relative z-10">
            <div className="relative">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <button
                onClick={() => handleImageUpload('profile')}
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all duration-200">
                <FaCamera className="w-4 h-4 text-[#3F1D9B]" />
              </button>
            </div>
          </div>

          {/* Business Info Section */}
          {profileData.role === 'Business Owner' && (
            <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#3F1D9B] flex items-center gap-2">
                  {editMode.business ? (
                    <input
                      type="text"
                      value={profileData.businessInfo.companyName}
                      onChange={(e) => handleBusinessUpdate({ companyName: e.target.value })}
                      className="border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                    />
                  ) : (
                    <>
                      {profileData.businessInfo.companyName}
                      {profileData.businessInfo.isVerified && (
                        <FaCheckCircle className="text-[#3F1D9B] w-5 h-5" />
                      )}
                    </>
                  )}
                </h3>
                <button
                  onClick={() => toggleEdit('business')}
                  className="text-[#3F1D9B] hover:text-[#2D0E81]">
                  <FaEdit className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  {editMode.business ? (
                    <input
                      type="text"
                      value={profileData.businessInfo.website}
                      onChange={(e) => handleBusinessUpdate({ website: e.target.value })}
                      className="border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.businessInfo.website}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  {editMode.business ? (
                    <input
                      type="text"
                      value={profileData.businessInfo.teamSize}
                      onChange={(e) => handleBusinessUpdate({ teamSize: e.target.value })}
                      className="border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.businessInfo.teamSize}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bio Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3F1D9B]">About</h3>
              <button
                onClick={() => toggleEdit('bio')}
                className="text-[#3F1D9B] hover:text-[#2D0E81]">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
            {editMode.bio ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleBioUpdate(e.target.value)}
                className="w-full p-2 border border-[#3F1D9B] rounded bg-transparent focus:outline-none"
                rows={4}
              />
            ) : (
              <p className="text-gray-700">{profileData.bio}</p>
            )}
          </div>

          {/* Skills Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3F1D9B]">Skills</h3>
              <button
                onClick={() => toggleEdit('skills')}
                className="text-[#3F1D9B] hover:text-[#2D0E81]">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
            {editMode.skills ? (
              <div className="space-y-2">
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
                      className="border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        const newSkills = profileData.skills.filter(s => s.id !== skill.id);
                        handleSkillsUpdate(newSkills);
                      }}
                      className="text-red-500 hover:text-red-700">
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newSkill = {
                      id: Date.now().toString(),
                      name: 'New Skill'
                    };
                    handleSkillsUpdate([...profileData.skills, newSkill]);
                  }}
                  className="text-[#3F1D9B] hover:text-[#2D0E81] text-sm">
                  + Add Skill
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1 bg-[#3F1D9B]/10 text-[#3F1D9B] rounded-full text-sm font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Education Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3F1D9B]">Education</h3>
              <button
                onClick={() => toggleEdit('education')}
                className="text-[#3F1D9B] hover:text-[#2D0E81]">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {editMode.education ? (
                <>
                  {profileData.education.map((edu, index) => (
                    <div key={edu.id} className="space-y-2 border-l-2 border-[#3F1D9B]/20 pl-4">
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const newEducation = [...profileData.education];
                          newEducation[index] = { ...edu, institution: e.target.value };
                          handleEducationUpdate(newEducation);
                        }}
                        className="w-full border-b border-[#3F1D9B] bg-transparent focus:outline-none font-semibold"
                        placeholder="Institution"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => {
                            const newEducation = [...profileData.education];
                            newEducation[index] = { ...edu, degree: e.target.value };
                            handleEducationUpdate(newEducation);
                          }}
                          className="flex-1 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Degree"
                        />
                        <input
                          type="text"
                          value={edu.field}
                          onChange={(e) => {
                            const newEducation = [...profileData.education];
                            newEducation[index] = { ...edu, field: e.target.value };
                            handleEducationUpdate(newEducation);
                          }}
                          className="flex-1 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Field of Study"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={edu.startYear}
                          onChange={(e) => {
                            const newEducation = [...profileData.education];
                            newEducation[index] = { ...edu, startYear: e.target.value };
                            handleEducationUpdate(newEducation);
                          }}
                          className="w-24 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Start Year"
                        />
                        <input
                          type="text"
                          value={edu.endYear}
                          onChange={(e) => {
                            const newEducation = [...profileData.education];
                            newEducation[index] = { ...edu, endYear: e.target.value };
                            handleEducationUpdate(newEducation);
                          }}
                          className="w-24 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="End Year"
                        />
                        <button
                          onClick={() => {
                            const newEducation = profileData.education.filter(e => e.id !== edu.id);
                            handleEducationUpdate(newEducation);
                          }}
                          className="text-red-500 hover:text-red-700 ml-auto">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newEducation = {
                        id: Date.now().toString(),
                        institution: '',
                        degree: '',
                        field: '',
                        startYear: '',
                        endYear: ''
                      };
                      handleEducationUpdate([...profileData.education, newEducation]);
                    }}
                    className="text-[#3F1D9B] hover:text-[#2D0E81] text-sm">
                    + Add Education
                  </button>
                </>
              ) : (
                profileData.education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-[#3F1D9B]/20 pl-4">
                    <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                    <p className="text-gray-700">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-sm text-gray-500">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3F1D9B]">Certifications</h3>
              <button
                onClick={() => toggleEdit('certifications')}
                className="text-[#3F1D9B] hover:text-[#2D0E81]">
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {editMode.certifications ? (
                <>
                  {profileData.certifications.map((cert, index) => (
                    <div key={cert.id} className="space-y-2">
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => {
                          const newCertifications = [...profileData.certifications];
                          newCertifications[index] = { ...cert, name: e.target.value };
                          handleCertificationsUpdate(newCertifications);
                        }}
                        className="w-full border-b border-[#3F1D9B] bg-transparent focus:outline-none font-semibold"
                        placeholder="Certification Name"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) => {
                            const newCertifications = [...profileData.certifications];
                            newCertifications[index] = { ...cert, issuer: e.target.value };
                            handleCertificationsUpdate(newCertifications);
                          }}
                          className="flex-1 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Issuer"
                        />
                        <input
                          type="text"
                          value={cert.date}
                          onChange={(e) => {
                            const newCertifications = [...profileData.certifications];
                            newCertifications[index] = { ...cert, date: e.target.value };
                            handleCertificationsUpdate(newCertifications);
                          }}
                          className="w-24 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Year"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={cert.url}
                          onChange={(e) => {
                            const newCertifications = [...profileData.certifications];
                            newCertifications[index] = { ...cert, url: e.target.value };
                            handleCertificationsUpdate(newCertifications);
                          }}
                          className="flex-1 border-b border-[#3F1D9B] bg-transparent focus:outline-none"
                          placeholder="Certificate URL"
                        />
                        <button
                          onClick={() => {
                            const newCertifications = profileData.certifications.filter(c => c.id !== cert.id);
                            handleCertificationsUpdate(newCertifications);
                          }}
                          className="text-red-500 hover:text-red-700">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newCertification = {
                        id: Date.now().toString(),
                        name: '',
                        issuer: '',
                        date: '',
                        url: ''
                      };
                      handleCertificationsUpdate([...profileData.certifications, newCertification]);
                    }}
                    className="text-[#3F1D9B] hover:text-[#2D0E81] text-sm">
                    + Add Certification
                  </button>
                </>
              ) : (
                profileData.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-500">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3F1D9B] hover:text-[#2D0E81] text-sm font-medium">
                        View Certificate
                      </a>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3F1D9B]">Portfolio</h3>
              <button
                onClick={handlePortfolioUpload}
                className="flex items-center gap-2 px-4 py-2 bg-[#3F1D9B] text-white rounded-md hover:bg-[#2D0E81] transition-all duration-200">
                <FaUpload className="w-4 h-4" />
                Upload
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {profileData.portfolio.map((item) => (
                <div
                  key={item.id}
                  className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <p className="text-white font-medium">{item.title}</p>
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
