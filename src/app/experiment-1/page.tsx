'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { EnvelopeIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon, DocumentArrowUpIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

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
  status: 'indexed' | 'processing' | 'error';
}

export default function Experiment1() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [emails, setEmails] = useState<Email[]>([]);
  const [indexResults, setIndexResults] = useState<IndexResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isIndexing, setIsIndexing] = useState(false);
  const [step, setStep] = useState<'initial' | 'emails-loaded' | 'indexed'>('initial');
  const [showDataFormat, setShowDataFormat] = useState(false);
  const [uploadError, setUploadError] = useState<string>('');

  const mockEmails: Email[] = [
    {
      id: '1',
      subject: 'Quarterly Business Review Meeting',
      sender: 'john.doe@company.com',
      receivedAt: '2024-01-15T10:30:00Z',
      content: 'Please join us for the quarterly business review meeting scheduled for next week...'
    },
    {
      id: '2',
      subject: 'Project Update: AI Integration',
      sender: 'sarah.smith@company.com',
      receivedAt: '2024-01-15T14:22:00Z',
      content: 'The AI integration project is progressing well. We have completed the initial phase...'
    },
    {
      id: '3',
      subject: 'Invoice #INV-2024-001',
      sender: 'billing@vendor.com',
      receivedAt: '2024-01-16T09:15:00Z',
      content: 'Please find attached the invoice for services rendered in December 2023...'
    },
    {
      id: '4',
      subject: 'Team Building Event Invitation',
      sender: 'hr@company.com',
      receivedAt: '2024-01-16T16:45:00Z',
      content: 'You are invited to our annual team building event. This year we are planning...'
    },
    {
      id: '5',
      subject: 'Security Alert: Password Reset Required',
      sender: 'security@company.com',
      receivedAt: '2024-01-17T08:00:00Z',
      content: 'As part of our security policy, all users are required to reset their passwords...'
    }
  ];

  const loadTestEmails = async () => {
    setIsLoading(true);
    setUploadError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEmails(mockEmails);
    setStep('emails-loaded');
    setIsLoading(false);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError('');
    setIsLoading(true);

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      // Validate data format
      if (!Array.isArray(data)) {
        throw new Error('Data must be an array of email objects');
      }

      // Validate each email object
      const requiredFields = ['id', 'subject', 'sender', 'receivedAt', 'content'];
      for (const email of data) {
        for (const field of requiredFields) {
          if (!email[field]) {
            throw new Error(`Missing required field: ${field}`);
          }
        }
      }

      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setEmails(data);
      setStep('emails-loaded');
      setIsLoading(false);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Invalid file format');
      setIsLoading(false);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const indexEmails = async () => {
    setIsIndexing(true);
    
    // Simulate indexing process
    const results: IndexResult[] = [];
    
    for (let i = 0; i < emails.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      results.push({
        id: emails[i].id,
        vectorId: `vec_${Math.random().toString(36).substr(2, 9)}`,
        similarity: Math.random() * 0.3 + 0.7, // Random similarity between 0.7-1.0
        status: 'indexed'
      });
      
      setIndexResults([...results]);
    }
    
    setStep('indexed');
    setIsIndexing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const navigateToExperiment2 = () => {
    router.push('/experiment-2');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Experiment 1: Email Loading & Indexing</h1>
      
      <div className="space-y-8">
        {/* Step 1: Load Test Emails */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <EnvelopeIcon className="h-6 w-6 mr-2 text-blue-600" />
              Step 1: Load Emails
            </h2>
            {step !== 'initial' && (
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            )}
          </div>
          
          {step === 'initial' && (
            <div>
              {/* Data Format Information */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Data Format</span>
                  </div>
                  <button
                    onClick={() => setShowDataFormat(!showDataFormat)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    {showDataFormat ? 'Hide' : 'Show'} Format
                  </button>
                </div>
                
                {showDataFormat && (
                  <div className="mt-3">
                    <p className="text-blue-800 text-sm mb-3">
                      Upload a JSON file with the following structure:
                    </p>
                    <pre className="bg-white border border-blue-300 rounded p-3 text-xs overflow-x-auto text-black">
{`[
  {
    "id": "1",
    "subject": "Email Subject",
    "sender": "sender@example.com",
    "receivedAt": "2024-01-15T10:30:00Z",
    "content": "Email content text..."
  }
]`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Error Display */}
              {uploadError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{uploadError}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="text-center py-4">
                <p className="text-gray-600 mb-6">
                  Load test emails or upload your own email data
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={loadTestEmails}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Loading emails...
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="h-5 w-5 mr-2" />
                        Load Test Emails
                      </>
                    )}
                  </button>

                  <button
                    onClick={triggerFileUpload}
                    disabled={isLoading}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <DocumentArrowUpIcon className="h-5 w-5 mr-2" />
                    Upload Custom Data
                  </button>
                </div>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>
          )}
          
          {step !== 'initial' && (
            <div className="text-center py-4">
              <div className="flex items-center justify-center text-green-600 mb-4">
                <CheckCircleIcon className="h-6 w-6 mr-2" />
                <span className="font-medium">Emails loaded successfully!</span>
              </div>
            </div>
          )}

          {emails.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Loaded emails: {emails.length}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Received At
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sender
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emails.map((email) => (
                      <tr key={email.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2 text-gray-400" />
                          {formatDate(email.receivedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {email.sender}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {email.subject}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Index Emails */}
        {step === 'emails-loaded' || step === 'indexed' ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg className="h-6 w-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2m0 8l2 2-2 2" />
                </svg>
                Step 2: Index Emails
              </h2>
              {step === 'indexed' && (
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              )}
            </div>

            {step === 'emails-loaded' && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-6">
                  Emails successfully loaded. Now you can index them using Pinecone
                </p>
                <button
                  onClick={indexEmails}
                  disabled={isIndexing}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto"
                >
                  {isIndexing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Indexing...
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 2-2 2m0 8l2 2-2 2" />
                      </svg>
                      Index Emails
                    </>
                  )}
                </button>
              </div>
            )}

            {indexResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Indexing Results ({indexResults.length}/{emails.length})
                </h3>
                <div className="grid gap-4">
                  {indexResults.map((result, index) => {
                    const email = emails.find(e => e.id === result.id);
                    return (
                      <div key={result.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {email?.subject}
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircleIcon className="h-3 w-3 mr-1" />
                            Indexed
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Vector ID:</span> {result.vectorId}
                          </div>
                          <div>
                            <span className="font-medium">Similarity Score:</span> {result.similarity.toFixed(3)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Summary */}
        {step === 'indexed' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-medium text-green-900">
                    Experiment 1 completed successfully!
                  </h3>
                  <p className="text-green-700 mt-1">
                    Loaded {emails.length} emails and successfully indexed {indexResults.length} records in Pinecone
                  </p>
                </div>
              </div>
              <button
                onClick={navigateToExperiment2}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                Go to Experiment 2
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}