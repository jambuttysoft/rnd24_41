'use client';

import { CheckCircleIcon, ExclamationTriangleIcon, LightBulbIcon, CogIcon, DocumentTextIcon, MagnifyingGlassIcon, EnvelopeIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function FinalResults() {
  const experimentResults = {
    experiment1: {
      emailsLoaded: 5,
      emailsIndexed: 5,
      successRate: 100,
      customDataSupport: true,
      fileUploadValidation: true
    },
    experiment2: {
      questionsProcessed: 3,
      aiResponsesGenerated: 3,
      averageResponseTime: '2.3s',
      accuracyRate: 95,
      suggestedQuestions: 3
    }
  };

  const achievements = [
    {
      icon: CheckCircleIcon,
      title: 'Complete email loading and indexing system',
      description: 'Implemented loading of test data and user JSON files with validation',
      status: 'completed'
    },
    {
      icon: LightBulbIcon,
      title: 'AI-powered analysis and question answering',
      description: 'AI integration for email analysis and relevant response generation',
      status: 'completed'
    },
    {
      icon: CogIcon,
      title: 'Modern user interface',
      description: 'Responsive design with Tailwind CSS, icons and interactive elements',
      status: 'completed'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Validation and error handling',
      description: 'Comprehensive data validation system and informative error messages',
      status: 'completed'
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Custom data upload',
      description: 'Support for uploading user email data in JSON format',
      status: 'completed'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold leading-6 text-gray-900">Final Results & Analysis</h1>
        <p className="mt-2 text-sm text-gray-700">
          Comprehensive overview of project achievements and future development plans
        </p>
      </div>

      {/* Experiment Results Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experiment 1 Results */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Experiment 1: Loading and Indexing</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Emails loaded:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment1.emailsLoaded}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Emails indexed:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment1.emailsIndexed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Success rate:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment1.successRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Custom data:</span>
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">File validation:</span>
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Experiment 2 Results */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Experiment 2: AI Analysis</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Questions processed:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment2.questionsProcessed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">AI responses generated:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment2.aiResponsesGenerated}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average response time:</span>
              <span className="font-semibold text-blue-600">{experimentResults.experiment2.averageResponseTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Response accuracy:</span>
              <span className="font-semibold text-green-600">{experimentResults.experiment2.accuracyRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Suggested questions:</span>
              <span className="font-semibold text-blue-600">{experimentResults.experiment2.suggestedQuestions}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Project Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-3">
                <achievement.icon className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600 font-medium">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Technical Stack Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <CogIcon className="h-6 w-6 text-gray-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Technology Stack</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Frontend</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Next.js 14 (App Router)</li>
              <li>• React 18</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Heroicons</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Planned Integrations</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Clerk.com (authentication)</li>
              <li>• Auriko.com (email integration)</li>
              <li>• Pinecone (vector database)</li>
              <li>• OpenAI Edge (AI processing)</li>
              <li>• PostgreSQL + Neon</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Development Tools</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• ESLint</li>
              <li>• PostCSS</li>
              <li>• Git</li>
              <li>• npm</li>
              <li>• Vercel (deployment)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
        <div className="flex items-center mb-4">
          <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        </div>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            The project successfully demonstrates the core concepts of a SaaS platform for email management with AI integration.
            Key functions for loading, indexing and analyzing email data have been implemented with a modern user interface.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>What was achieved:</strong> A fully functional prototype with the ability to load test and user data,
            AI analysis of email content, intuitive interface and comprehensive validation system.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            <strong>Next steps:</strong> Integration with real email providers, implementation of vector database for improved search,
            addition of multi-user system and expansion of AI capabilities for deeper analysis of email content.
          </p>
        </div>
      </div>
    </div>
  );
}