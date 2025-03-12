
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { User } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1985-06-15',
    gender: 'male',
    address: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  return (
    <MobileLayout title="My Profile" showBackButton onBack={() => navigate('/settings')}>
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={40} className="text-gray-400" />
            </div>
            {isEditing && (
              <button 
                className="absolute bottom-0 right-0 bg-pmc-blue text-white rounded-full p-2"
                aria-label="Change profile picture"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <h3 className="font-medium text-pmc-dark">Personal Information</h3>
          {!isEditing && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <Input 
                name="firstName"
                value={profileData.firstName} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <Input 
                name="lastName"
                value={profileData.lastName} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input 
              name="email"
              type="email" 
              value={profileData.email} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <Input 
              name="phone"
              value={profileData.phone} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <Input 
                name="dateOfBirth"
                type="date" 
                value={profileData.dateOfBirth} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Gender</label>
              {isEditing ? (
                <Select 
                  value={profileData.gender}
                  onValueChange={(value) => handleSelectChange('gender', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input 
                  value={profileData.gender === 'male' ? 'Male' : 
                         profileData.gender === 'female' ? 'Female' : 
                         profileData.gender === 'other' ? 'Other' : 'Prefer not to say'} 
                  disabled 
                />
              )}
            </div>
          </div>

          <h3 className="font-medium text-pmc-dark mt-6">Address</h3>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Street Address</label>
            <Input 
              name="address"
              value={profileData.address} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">City</label>
              <Input 
                name="city"
                value={profileData.city} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">State</label>
              <Input 
                name="state"
                value={profileData.state} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Zip Code</label>
            <Input 
              name="zipCode"
              value={profileData.zipCode} 
              onChange={handleChange} 
              disabled={!isEditing} 
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex space-x-3 mt-6">
            <Button 
              className="flex-1 bg-pmc-blue hover:bg-pmc-blue/90"
              onClick={handleSave}
            >
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Profile;
