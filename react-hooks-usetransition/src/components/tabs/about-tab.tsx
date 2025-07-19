const AboutTab = () => {
  return (
    <div className="prose max-w-none">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Welcome to my profile!
        </h2>
        <p className="text-blue-800 leading-relaxed">
          This is a demo showcasing React useTransition hook for better user
          experience when switching between tabs. The Posts tab contains
          artificially slow rendering to demonstrate how transitions can keep
          the UI responsive.
        </p>
      </div>
    </div>
  );
};

export default AboutTab;
