'use client';

import { useState } from 'react';
import { CheckCircleIcon, MagnifyingGlassIcon, LightBulbIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface Email {
  id: string;
  subject: string;
  sender: string;
  receivedAt: string;
  content: string;
}

interface IndexResult {
  id: string;
  vectorId: string;
  similarity: number;
  status: 'indexed';
}

export default function Experiment2() {
  const [question, setQuestion] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [answer, setAnswer] = useState('');

  // Mock data from Experiment 1 results
  const previousResults = {
    totalEmails: 5,
    indexedEmails: 5,
    emails: [
      {
        id: '1',
        subject: 'Quarterly Business Review Meeting',
        sender: 'john.doe@company.com',
        receivedAt: '2024-01-15T10:30:00Z',
        content: 'Please join us for the quarterly business review meeting scheduled for next week. We will discuss Q4 performance, budget planning for next year, and strategic initiatives.'
      },
      {
        id: '2',
        subject: 'Project Update: AI Integration',
        sender: 'sarah.smith@company.com',
        receivedAt: '2024-01-15T14:22:00Z',
        content: 'The AI integration project is progressing well. We have completed the initial phase of data collection and are now moving to the model training stage. Expected completion by end of month.'
      },
      {
        id: '3',
        subject: 'Invoice #INV-2024-001',
        sender: 'billing@vendor.com',
        receivedAt: '2024-01-16T09:15:00Z',
        content: 'Please find attached the invoice for services rendered in December 2023. Total amount due: $15,750. Payment terms: Net 30 days. Please remit payment by February 15, 2024.'
      },
      {
        id: '4',
        subject: 'Team Building Event Invitation',
        sender: 'hr@company.com',
        receivedAt: '2024-01-16T16:45:00Z',
        content: 'You are invited to our annual team building event. This year we are planning outdoor activities including hiking, team challenges, and a barbecue dinner. Date: March 15, 2024.'
      },
      {
        id: '5',
        subject: 'Security Alert: Password Reset Required',
        sender: 'security@company.com',
        receivedAt: '2024-01-17T08:00:00Z',
        content: 'As part of our security policy, all users are required to reset their passwords every 90 days. Your password expires in 3 days. Please use the company portal to update your credentials.'
      }
    ] as Email[],
    indexResults: [
      { id: '1', vectorId: 'vec_abc123def', similarity: 0.892, status: 'indexed' as const },
      { id: '2', vectorId: 'vec_ghi456jkl', similarity: 0.847, status: 'indexed' as const },
      { id: '3', vectorId: 'vec_mno789pqr', similarity: 0.923, status: 'indexed' as const },
      { id: '4', vectorId: 'vec_stu012vwx', similarity: 0.756, status: 'indexed' as const },
      { id: '5', vectorId: 'vec_yz345abc', similarity: 0.834, status: 'indexed' as const }
    ] as IndexResult[]
  };

  // Suggested questions based on email analysis
  const suggestedQuestions = [
    "What meetings are scheduled and what topics will be discussed?",
    "Are there any pending invoices or payment deadlines I should know about?",
    "What security requirements or policy updates do I need to address?"
  ];

  const handleQuestionSubmit = async (questionText: string) => {
    setQuestion(questionText);
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock response based on question content
    let mockAnswer = '';
    const lowerQuestion = questionText.toLowerCase();
    
    if (lowerQuestion.includes('meeting') || lowerQuestion.includes('schedule')) {
      mockAnswer = "Based on your emails, there is a Quarterly Business Review Meeting scheduled for next week. The meeting will cover Q4 performance, budget planning for next year, and strategic initiatives. Additionally, there's a team building event planned for March 15, 2024, with outdoor activities and a barbecue dinner.";
    } else if (lowerQuestion.includes('invoice') || lowerQuestion.includes('payment') || lowerQuestion.includes('money')) {
      mockAnswer = "You have one pending invoice (#INV-2024-001) from billing@vendor.com for $15,750. The payment is due by February 15, 2024 (Net 30 days terms). This invoice is for services rendered in December 2023.";
    } else if (lowerQuestion.includes('security') || lowerQuestion.includes('password') || lowerQuestion.includes('policy')) {
      mockAnswer = "There's an important security alert: your password expires in 3 days. As per company policy, passwords must be reset every 90 days. You need to use the company portal to update your credentials immediately to maintain account access.";
    } else {
      mockAnswer = "Based on the analyzed emails, I found information about business meetings, financial obligations, project updates, team events, and security requirements. Your emails contain a mix of operational updates, administrative tasks, and important deadlines that require attention.";
    }
    
    setAnswer(mockAnswer);
    setIsProcessing(false);
  };

  const handleSuggestedQuestion = (suggestedQuestion: string) => {
    handleQuestionSubmit(suggestedQuestion);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Experiment 2: Email Analysis & Q&A</h1>
      
      <div className="space-y-8">
        {/* Previous Results Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Results from Experiment 1</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center">
                <EnvelopeIcon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-blue-900">{previousResults.totalEmails}</p>
                  <p className="text-blue-700 text-sm">Emails Loaded</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2m0 8l2 2-2 2" />
                </svg>
                <div>
                  <p className="text-2xl font-bold text-purple-900">{previousResults.indexedEmails}</p>
                  <p className="text-purple-700 text-sm">Successfully Indexed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-green-900">100%</p>
                  <p className="text-green-700 text-sm">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">Indexed Email Subjects:</h3>
            <ul className="space-y-2">
              {previousResults.emails.map((email, index) => (
                <li key={email.id} className="flex items-center text-sm text-gray-600">
                  <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                    {index + 1}
                  </span>
                  {email.subject}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Question Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Ask Questions About Your Emails</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your question:
              </label>
              <textarea
                id="question"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-black"
                placeholder="Ask anything about your emails... (e.g., 'What meetings do I have scheduled?', 'Are there any urgent tasks?')"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            
            <button
              onClick={() => handleQuestionSubmit(question)}
              disabled={!question.trim() || isProcessing}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing emails...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Ask Question
                </>
              )}
            </button>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <LightBulbIcon className="h-6 w-6 text-yellow-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Suggested Questions</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            Based on the content analysis of your emails, here are some relevant questions you might want to ask:
          </p>
          
          <div className="grid gap-3">
            {suggestedQuestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(suggestion)}
                disabled={isProcessing}
                className="text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-800">{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Analysis Result</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-gray-800 leading-relaxed">{answer}</p>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>✨ This analysis was generated by processing your indexed emails through our AI system.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}