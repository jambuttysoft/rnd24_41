import MermaidChart from '@/components/MermaidChart';

export default function ProjectSummary() {
  const sequenceDiagram = `
    sequenceDiagram
        participant User
        participant Clerk
        participant LocalDB
        participant Auriko
        participant AI
        %% Authentication and token storage
        User->>Clerk: Login enter credentials
        Clerk-->>User: Return tokens auth_token, refresh_token
        User->>LocalDB: Save tokens auth_token, refresh_token
        %% Fetching emails via Auriko
        loop Periodic email request
            LocalDB->>Auriko: Request access to emails with auth_token
            Auriko-->>LocalDB: Return emails email data
            LocalDB->>LocalDB: Save emails in the local database
        end
        %% Processing emails with the AI module
        User->>LocalDB: Request email processing question to AI
        LocalDB->>AI: Send indexed emails question
        AI-->>LocalDB: Answer the question based on email data
        LocalDB-->>User: Return the answer
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Project Summary</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          This project introduces a SaaS platform designed to create a unified interface for managing multiple email accounts, 
          streamlining workspace efficiency through advanced email indexing and artificial intelligence (AI) integration. 
          The primary objective is to enhance productivity by consolidating email management tasks and leveraging AI to assist 
          in email analysis, information retrieval, and content generation. The system addresses the challenges of handling 
          multiple email accounts by providing a cohesive environment that optimizes user workflows and improves communication efficiency.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives and Scope</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The project aims to develop a robust platform that integrates multiple email accounts into a single interface, 
          enabling seamless access, organization, and interaction with email content. Key objectives include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>Unified Email Management:</strong> Centralizing access to multiple email accounts to reduce context-switching and improve workflow efficiency.</li>
          <li><strong>AI-Powered Assistance:</strong> Utilizing AI to perform deep email analysis, extract relevant information, and assist in drafting emails directly within the platform.</li>
          <li><strong>Scalable and Secure Infrastructure:</strong> Implementing a reliable backend architecture to ensure secure data handling, efficient storage, and fast retrieval.</li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The scope encompasses the integration of diverse email services, AI-driven functionalities for content processing, 
          and a user-friendly interface to enhance accessibility.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Architecture</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The following sequence diagram illustrates the system's workflow, from user authentication through email processing and AI-powered analysis:
        </p>
        <div className="mb-8">
          <MermaidChart chart={sequenceDiagram} id="system-architecture-diagram" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Methodology and Technologies</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The development process leveraged a combination of modern platforms and technologies to ensure scalability, security, and performance:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li><strong>Clerk.com:</strong> Used for secure user authentication and seamless login management across multiple email accounts.</li>
          <li><strong>Auriko.com:</strong> Facilitated integration with external email services to streamline connectivity and data access.</li>
          <li><strong>Prisma ORM:</strong> Employed for efficient database management, enabling structured data handling and querying.</li>
          <li><strong>PostgreSQL and Neon Database Serverless:</strong> Provided robust and scalable solutions for data storage, ensuring high availability and performance.</li>
          <li><strong>Pinecone:</strong> Utilized for vector-based indexing and search, enabling fast and accurate retrieval of email content.</li>
          <li><strong>OpenAI Edge:</strong> Integrated for real-time AI processing, supporting email analysis, information extraction, and AI-assisted email composition.</li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The methodology followed an iterative development approach, with a focus on rapid prototyping, testing, 
          and refinement to align with user needs and technical requirements.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">The platform offers the following core functionalities:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><strong>Multi-Account Integration:</strong> A unified interface that supports simultaneous access to multiple email accounts, reducing the need for multiple applications.</li>
          <li><strong>Email Indexing:</strong> Advanced indexing capabilities powered by Pinecone, enabling efficient search and retrieval of email content.</li>
          <li><strong>AI-Driven Analysis:</strong> Utilization of OpenAI Edge to perform deep analysis of email content, identify key information, and provide actionable insights.</li>
          <li><strong>AI-Assisted Email Composition:</strong> An integrated AI tool that assists users in drafting professional and contextually relevant emails directly within the platform.</li>
          <li><strong>Secure Data Management:</strong> Robust authentication (Clerk.com) and database solutions (PostgreSQL, Neon) to ensure data privacy and integrity.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Impact</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The project addresses the growing need for efficient email management in professional and personal contexts, 
          where users often juggle multiple accounts. By consolidating email operations into a single platform and leveraging 
          AI for intelligent assistance, the system significantly reduces time spent on email-related tasks. The use of scalable 
          serverless technologies and secure authentication ensures that the platform can handle large volumes of data while 
          maintaining user trust. Preliminary evaluations suggest improved user productivity, faster information retrieval, 
          and enhanced communication quality due to AI-driven features.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          This SaaS project represents a significant advancement in email management by combining a unified interface with 
          AI-powered functionalities. The integration of cutting-edge technologies such as Clerk.com, Prisma ORM, PostgreSQL, 
          Neon Database Serverless, Pinecone, and OpenAI Edge ensures a scalable, secure, and efficient platform. Future work 
          will focus on expanding AI capabilities, integrating additional email providers, and enhancing user customization 
          options to further improve the platform's adaptability and performance.
        </p>
      </div>
    </div>
  );
}