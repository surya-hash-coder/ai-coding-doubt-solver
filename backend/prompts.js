// Prompt templates for different features

const prompts = {
    explain: (language, code) => {
        return `You are a friendly programming teacher. Explain this ${language} code line by line in simple terms that a beginner can understand:

\`\`\`${language}
${code}
\`\`\`

For each line, explain:
1. What the line does
2. Any important concepts
3. Use simple analogies if helpful

Format your response with clear line numbers and explanations.`;
    },

    bugs: (language, code) => {
        return `Analyze this ${language} code for bugs and errors:

\`\`\`${language}
${code}
\`\`\`

Provide:
1. List any syntax errors or logical bugs
2. Explain why each is a problem
3. Show the corrected code
4. Tips to avoid these bugs in future

Be thorough but beginner-friendly.`;
    },

    improve: (language, code) => {
        return `Review this ${language} code and suggest improvements:

\`\`\`${language}
${code}
\`\`\`

Provide:
1. Optimized version of the code
2. List what improvements you made and why
3. Explain any best practices applied
4. Keep the improved code beginner-friendly

Focus on readability and efficiency.`;
    },

    beginner: (language, code) => {
        return `Explain this ${language} code as if teaching a complete beginner:

\`\`\`${language}
${code}
\`\`\`

Requirements:
- No technical jargon without explanation
- Use simple words and analogies
- Break down complex concepts
- Assume the person just started learning
- Be encouraging and positive

Explain what the code does overall, then each part simply.`;
    }
};

module.exports = prompts;