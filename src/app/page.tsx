export default function Home() {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold leading-6 text-gray-900">Home</h1>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Introduction</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This project focuses on the development of a unified platform for managing multiple email accounts, 
            aimed at optimizing the workspace through efficient email indexing and leveraging artificial intelligence (AI) 
            as an assistant.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The system integrates AI-driven functionalities to facilitate comprehensive email analysis, 
            information retrieval, and deep insights extraction. Additionally, the platform employs AI to assist 
            users in composing emails directly within the interface, enhancing productivity and streamlining 
            communication processes.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            To accelerate development and simplify access to email services, user authentication, and data storage, 
            several platforms and technologies were utilized, including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Authentication & Services</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• Clerk.com for authentication</li>
                <li>• Auriko.com for service integration</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Database & Storage</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Prisma ORM for database management</li>
                <li>• PostgreSQL and Neon Database Serverless</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">AI & Search</h3>
              <ul className="text-purple-800 space-y-1">
                <li>• Pinecone for vector search and indexing</li>
                <li>• OpenAI Edge for real-time AI capabilities</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Key Features</h3>
              <ul className="text-orange-800 space-y-1">
                <li>• Multi-account email management</li>
                <li>• AI-powered email composition</li>
                <li>• Intelligent email analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
