## Relevant Files

- `src/language-server/server.ts` - VS Code language server for SQL file support
- `src/language-server/syntax/sql.tmLanguage.json` - TextMate grammar for SQLite syntax highlighting
- `src/language-server/completion/basic-completion.ts` - Basic keyword and function completion
- `src/language-server/completion/dynamic-completion.ts` - Context-aware completion for database objects
- `src/language-server/validation/sql-validator.ts` - SQL syntax validation and error reporting
- `src/language-server/formatting/sql-formatter.ts` - SQL code formatting and indentation
- `src/commands/execute-sql-file.ts` - Command to execute entire SQL files
- `src/services/database-integration.ts` - Integration with database viewer for context
- `src/templates/sql-file-template.sql` - Template for new SQL files
- `snippets/sql.json` - Code snippets for common SQL patterns
- `src/test/language-server/*.test.ts` - Unit tests for language server functionality

### Notes

- All new files should follow existing TypeScript conventions and naming patterns
- Language server should be implemented using VS Code's Language Server Protocol
- Syntax highlighting should match SQLite official documentation
- Code completion should respond within 100ms
- SQL files should associate with .sql extension automatically

## Tasks

- [ ] 1.0 Language Server Setup
  - [ ] 1.1 Initialize VS Code language server extension
  - [ ] 1.2 Configure LSP communication between client and server
  - [ ] 1.3 Register language server for .sql files
  - [ ] 1.4 Set up proper error handling and logging

- [ ] 2.0 SQLite Syntax Highlighting
  - [ ] 2.1 Create TextMate grammar for SQLite SQL syntax
  - [ ] 2.2 Implement keyword highlighting (SELECT, INSERT, UPDATE, etc.)
  - [ ] 2.3 Add function and operator highlighting
  - [ ] 2.4 Handle string literals, comments, and identifiers
  - [ ] 2.5 Test syntax highlighting accuracy (>95% for valid SQL)

- [ ] 3.0 Basic Code Completion
  - [ ] 3.1 Implement completion provider for SQL keywords
  - [ ] 3.2 Add built-in SQLite function completion
  - [ ] 3.3 Include SQL operators and clauses
  - [ ] 3.4 Optimize completion response time (<100ms)
  - [ ] 3.5 Add completion documentation and examples

- [ ] 4.0 Dynamic Code Completion
  - [ ] 4.1 Detect active database from SQLite viewer
  - [ ] 4.2 Implement table name completion in FROM clauses
  - [ ] 4.3 Add column name completion in SELECT/WHERE contexts
  - [ ] 4.4 Include index and constraint name completion
  - [ ] 4.5 Update completions when database changes

- [ ] 5.0 SQL Syntax Validation
  - [ ] 5.1 Implement SQL parser for syntax validation
  - [ ] 5.2 Add error diagnostics with position information
  - [ ] 5.3 Highlight syntax errors in real-time
  - [ ] 5.4 Provide actionable error messages
  - [ ] 5.5 Handle multi-statement SQL files

- [ ] 6.0 SQL Code Formatting
  - [ ] 6.1 Implement SQL formatter with configurable rules
  - [ ] 6.2 Add proper indentation and line breaks
  - [ ] 6.3 Handle complex queries and subqueries
  - [ ] 6.4 Create format document command integration
  - [ ] 6.5 Support format selection and custom formatting

- [ ] 7.0 SQL File Execution
  - [ ] 7.1 Create execute SQL file command
  - [ ] 7.2 Parse and execute multi-statement files
  - [ ] 7.3 Display execution results in database viewer
  - [ ] 7.4 Handle execution errors and partial failures
  - [ ] 7.5 Support transaction management for file execution

- [ ] 8.0 Code Snippets and Templates
  - [ ] 8.1 Create code snippets for common SQL patterns
  - [ ] 8.2 Add file templates for new .sql files
  - [ ] 8.3 Include parameterized query snippets
  - [ ] 8.4 Provide transaction and error handling snippets

- [ ] 9.0 Database Context Integration
  - [ ] 9.1 Integrate with database viewer for schema awareness
  - [ ] 9.2 Enable seamless switching between editor and viewer
  - [ ] 9.3 Share database context between components
  - [ ] 9.4 Handle multiple database connections

- [ ] 10.0 Testing and Quality Assurance
  - [ ] 10.1 Create unit tests for syntax parsing (80% coverage)
  - [ ] 10.2 Implement integration tests for completion and validation
  - [ ] 10.3 Add performance tests for response times
  - [ ] 10.4 Create accessibility tests for language features
  - [ ] 10.5 Validate against PRD requirements

- [ ] 11.0 Documentation and Deployment
  - [ ] 11.1 Document SQL editor features and usage
  - [ ] 11.2 Create user guide for language server capabilities
  - [ ] 11.3 Update extension README with SQL file support
  - [ ] 11.4 Bundle and deploy language server properly