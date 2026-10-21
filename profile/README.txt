Web Lab 6 — 使用方式與繳交說明

1. 解壓縮後開啟根目錄 index.html，即可查看個人介紹網站（Task 2）。
2. tokyo/index.html 是依原始 HTML 補完的東京網站（Task 1）。
3. 不要只移動 HTML：style.css 和 img 資料夾也必須保留。
4. 全站只使用 HTML 與外部 CSS，無 JavaScript、Bootstrap、CDN 或網路圖片依賴。
5. 原檔所引用的圖片未附在附件中，已改用本機 SVG 插畫。可自行換成照片。
6. 個人網站使用你已提供的姓名、就讀學校、技術興趣與專案介紹；上傳前請確認文字符合你想公開的內容。

GitHub Pages 發布（仍須在你的 GitHub 帳號完成）
1. 建立一個儲存庫（例如 web-lab6）；一般免費帳號可使用公開儲存庫。
2. 在儲存庫選 Add file > Upload files，將本資料夾「裡面的全部內容」上傳。
   儲存庫最上層必須能直接看見 index.html、style.css、img、tokyo；不要上傳 ZIP 本身。
3. 儲存至 main 分支。
4. Settings > Pages > Build and deployment，Source 選 Deploy from a branch。
5. Branch 選 main、資料夾選 /(root)，按 Save。
6. 等待發布，開啟 Pages 畫面顯示的實際網址。
7. 在發布網址檢查圖片、四個導覽連結、表格及 Tokyo 網站連結。
8. 將「個人介紹網站」的 GitHub Pages 網址交給助教。只交 ZIP 不符合 PDF 的繳交規定。

要求對照
Task 1：tokyo/index.html + tokyo/style.css
- Planner 導覽錨點、Three Days in Tokyo 三日行程表。
- Day / Morning / Afternoon / Evening 四欄，Day 3 使用 colspan="2"。
- Travel Budget：Category / Item / Estimated Cost，分類使用 rowspan="2"。
- 行程表 border-collapse: collapse；預算表 border-collapse: separate 與 border-spacing: 5px；皆有 padding。
- Gallery 保留為第四區段；補上 header、main、footer。
Task 2：根目錄 index.html + style.css
- 個人介紹、專案、學習計畫、興趣；各有導覽錨點。
- 技能表包含 rowspan="2" 與 colspan="3"。
- 本機相關插畫、圖庫 hover/鍵盤 focus 效果、手機版面。
- 所有 CSS 均在 style.css，無行內 style 或 style 標籤。

東京預算僅為表格練習用示例，不代表即時價格或完整旅費。
