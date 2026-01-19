## Relevant Files

- `src/schemaInspector.ts` - Main schema inspection service with database metadata queries
- `src/schemaTreeProvider.ts` - VS Code tree data provider for hierarchical schema display
- `src/schemaTreeItem.ts` - Tree item implementation for schema elements
- `src/schemaDetailPanel.ts` - Webview panel for detailed schema information display
- `src/schemaDetailView.html` - HTML template for schema detail views
- `src/schemaDetailView.js` - JavaScript for schema detail panel interactions
- `src/schemaDetailView.css` - Styling for schema detail panels
- `src/schemaSearch.ts` - Search and filtering functionality for schema elements
- `src/schemaCache.ts` - Caching system for schema information
- `src/schemaExport.ts` - Schema export functionality for SQL CREATE statements
- `src/types/schema.ts` - TypeScript interfaces for schema data structures
- `src/test/schemaInspector.test.ts` - Unit tests for schema inspection functionality
- `src/test/schemaTreeProvider.test.ts` - Unit tests for tree view functionality

### Notes

- All new files should follow existing TypeScript conventions and naming patterns
- Webview assets should be bundled appropriately by webpack configuration
- Unit tests should be placed alongside the code files they test
- Use `npm test` to run all tests found by the Jest configuration
- Schema loading should complete under 2 seconds for databases with 50+ tables

## Tasks

- [ ] 1.0 Schema Data Models and Types
  - [ ] 1.1 Create TypeScript interfaces for schema elements (tables, columns, indexes, constraints, foreign keys)
  - [ ] 1.2 Implement data validation for schema structures
  - [ ] 1.3 Add schema element relationship mapping
  - [ ] 1.4 Create schema data serialization utilities

- [ ] 2.0 SQLite Metadata Querying
  - [ ] 2.1 Implement sqlite_master table parsing for basic schema information
  - [ ] 2.2 Add PRAGMA queries for detailed table and column information
  - [ ] 2.3 Implement index and constraint metadata extraction
  - [ ] 2.4 Add foreign key relationship discovery
  - [ ] 2.5 Handle complex constraint expressions and triggers

- [ ] 3.0 Schema Tree View Implementation
  - [ ] 3.1 Create VS Code TreeDataProvider for schema hierarchy
  - [ ] 3.2 Implement collapsible tree nodes for tables, columns, indexes
  - [ ] 3.3 Add visual icons and indicators for different schema elements
  - [ ] 3.4 Implement tree refresh and update mechanisms
  - [ ] 3.5 Add keyboard navigation support for tree view

- [ ] 4.0 Schema Detail Panels
  - [ ] 4.1 Create webview provider for schema detail display
  - [ ] 4.2 Implement table detail view with columns and constraints
  - [ ] 4.3 Add index detail view with column composition
  - [ ] 4.4 Create foreign key relationship visualization
  - [ ] 4.5 Add schema overview panel with statistics

- [ ] 5.0 Search and Filtering
  - [ ] 5.1 Implement schema element search by name and type
  - [ ] 5.2 Add real-time filtering as user types
  - [ ] 5.3 Create advanced filter options (by type, table, etc.)
  - [ ] 5.4 Add search result highlighting and navigation

- [ ] 6.0 Schema Export Functionality
  - [ ] 6.1 Implement SQL CREATE statement generation
  - [ ] 6.2 Add schema export with proper formatting
  - [ ] 6.3 Create clipboard and file export options
  - [ ] 6.4 Handle circular dependencies in export order

- [ ] 7.0 Performance and Caching
  - [ ] 7.1 Implement schema information caching
  - [ ] 7.2 Add cache invalidation on database changes
  - [ ] 7.3 Optimize metadata queries for performance
  - [ ] 7.4 Add lazy loading for large schemas

- [ ] 8.0 Integration with Database Viewer
  - [ ] 8.1 Add schema inspector to SQLite editor tabs
  - [ ] 8.2 Implement schema refresh on database modification
  - [ ] 8.3 Add context menu integration
  - [ ] 8.4 Handle multiple database schema inspection

- [ ] 9.0 Accessibility and UI Polish
  - [ ] 9.1 Add screen reader support and ARIA labels
  - [ ] 9.2 Implement keyboard shortcuts for common operations
  - [ ] 9.3 Add loading states and error handling UI
  - [ ] 9.4 Polish visual design and consistency

- [ ] 10.0 Testing and Quality Assurance
  - [ ] 10.1 Create unit tests for schema parsing (80% coverage)
  - [ ] 10.2 Implement integration tests for tree view functionality
  - [ ] 10.3 Add performance tests for schema loading
  - [ ] 10.4 Create accessibility tests for UI components
  - [ ] 10.5 Validate against PRD requirements and success metrics