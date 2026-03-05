export const categories = {
  VISUAL_ASSETS: "visual assets",
  DEVELOPER_TOOLS: "developer tools",
  CODING_PRACTICE: "coding practice",
  UI_UX_DESIGN_INSPIRATION: "UI/UX & design inspiration",
  FRAMEWORKS_LIBRARIES: "frameworks & libraries",
  LEARNING_REFERENCE: "learning & reference",
  MOCK_APIS_TEST_DATA: "mock APIs & test data",
  PROTOTYPING: "prototyping",
  VS_CODE_EXTENSIONS: "VS code extensions",
} as const;

// Type that represents the values of the categories object
export type CategoryList = typeof categories[keyof typeof categories];

export interface Resource {
  pageName: string;
  pageLink: string;
  description: string;
  tags: string[];
  category: CategoryList;
}