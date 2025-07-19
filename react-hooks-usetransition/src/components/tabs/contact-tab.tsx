import { Mail, Phone, MapPin } from "lucide-react";

const ContactTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-6">You can find me online here:</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Mail className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900">Email</p>
            <p className="text-gray-600">admin@mysite.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium text-gray-900">Phone</p>
            <p className="text-gray-600">+123456789</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg md:col-span-2">
          <MapPin className="w-5 h-5 text-red-600" />
          <div>
            <p className="font-medium text-gray-900">Location</p>
            <p className="text-gray-600">Available for remote work worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
