/**
 * 處理 JSON 數據路徑的 composable
 */
export const useJsonData = () => {
  /**
   * 獲取 JSON 數據的完整路徑
   * @param path jsonData 後的路徑，例如: 'projectDemo/techNote.json'
   */
  const getJsonDataPath = (path: string): string => {
    // 確保路徑不以 / 開頭（避免雙斜線）
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

    // 根據環境返回正確的路徑
    // 在 production 環境下，Vite 會自動處理 import.meta.env.BASE_URL
    const basePath = import.meta.env.BASE_URL || '/';

    const jsonDataPath = `jsonData/${normalizedPath}`;

    // 組合 base path 和 json 路徑
    return basePath.endsWith('/') ? `${basePath}${jsonDataPath}` : `${basePath}/${jsonDataPath}`;
  };

  return {
    getJsonDataPath,
  };
};
