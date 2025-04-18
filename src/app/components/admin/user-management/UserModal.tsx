'use client';

interface Permission {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  manage_roles: boolean;
}

interface UserFormData {
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'active' | 'inactive' | 'suspended';
  department?: string;
  location?: string;
  permissions: Permission;
}

interface UserModalProps {
  isOpen: boolean;
  selectedUser: UserFormData | null;
  formData: UserFormData;
  errors: { [key: string]: string };
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onPermissionChange: (permission: keyof Permission) => void;
}

export default function UserModal({
  isOpen,
  selectedUser,
  formData,
  errors,
  isSubmitting,
  onClose,
  onSubmit,
  onChange,
  onPermissionChange,
}: UserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <h3 className="text-xl font-bold text-[#2A175E] mb-4">
          {selectedUser ? 'Edit User' : 'Add New User'}
        </h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20">
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-[#D6D6E7] focus:outline-none focus:ring-2 focus:ring-[#3F1D9B]/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(formData.permissions).map((permission) => (
                <label
                  key={permission}
                  className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={
                      formData.permissions[permission as keyof Permission]
                    }
                    onChange={() =>
                      onPermissionChange(permission as keyof Permission)
                    }
                    className="rounded border-gray-300 text-[#3F1D9B] focus:ring-[#3F1D9B]"
                  />
                  <span className="capitalize">
                    {permission.replace('_', ' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm">{errors.submit}</p>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[#3F1D9B] text-white rounded-lg hover:bg-[#2D0E81] transition-colors disabled:opacity-50">
              {selectedUser ? 'Save Changes' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
