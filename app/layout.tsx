import "./globals.css";
import { concept } from "../lib/concept";
import TopBarTemplate1 from "../components/TopBarTemplate1";
import NavTemplate1 from "../components/NavTemplate1";
import FooterTemplate1 from "../components/FooterTemplate1";

export const metadata = {
  title: "Visspeciaalzaak van Bakel | Verse Vis, Sushi & Visschotels in Oss",
  description: "Dé visspecialist in Oss al 27 jaar. Verse vis, gebakken kibbeling, sushi, pokébowls, vis- en tapasschalen en zelfgemaakte salades. Bestel op maat bij Visspeciaalzaak van Bakel aan de Terwaenen.",
};

export default function RootLayout({ children }) {
  const c = concept.colors || {};
  const themeStyle = {
    "--t1-accent": c.primary || "#9e8c7b",
    "--t1-accent-2": c.accent || c.primary || "#9e8c7b",
    "--t1-bg": c.background || "#eeeeee",
    "--t1-dark": c.text || "#151515",
    "--t1-text": c.text || "#000000",
  };
  return (
    <html lang="nl">
      <body className="bg-[var(--t1-bg)]" style={themeStyle}>
        <TopBarTemplate1 />
        <NavTemplate1 />
        {children}
        <FooterTemplate1 />
        {/* Edit-bridge: parent sends ai-edit-mode=on -> [data-edit-key] elements get hover outline + clicks postMessage to parent */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              if (window.__aiEditBridge) return;
              window.__aiEditBridge = true;
              var editMode = false;
              var styleEl = null;
              function ensureStyle(){
                if (styleEl) return;
                styleEl = document.createElement("style");
                styleEl.id = "ai-edit-style";
                styleEl.textContent =
                  "body[data-edit-mode='1'] [data-edit-key]{outline:2px dashed transparent;outline-offset:3px;cursor:pointer;transition:outline-color .15s,background-color .15s;border-radius:4px}" +
                  "body[data-edit-mode='1'] [data-edit-key]:hover{outline-color:#6366f1;background-color:rgba(99,102,241,0.05)}" +
                  "body[data-edit-mode='1'] [data-edit-key][data-edit-active='1']{outline-color:#4f46e5;outline-style:solid}";
                document.head.appendChild(styleEl);
              }
              function setMode(on){
                editMode = !!on;
                document.body.dataset.editMode = on ? "1" : "";
                if (on) ensureStyle();
              }
              window.addEventListener("message", function(e){
                if (!e.data || typeof e.data !== "object") return;
                if (e.data.type === "ai-edit-mode") setMode(!!e.data.on);
                if (e.data.type === "ai-edit-clear-active") {
                  document.querySelectorAll("[data-edit-active]").forEach(function(n){ n.removeAttribute("data-edit-active"); });
                }
              });
              document.addEventListener("click", function(e){
                if (!editMode) return;
                var t = e.target;
                while (t && t !== document.body && !(t.dataset && t.dataset.editKey)) t = t.parentElement;
                if (!t || !t.dataset || !t.dataset.editKey) return;
                e.preventDefault();
                e.stopPropagation();
                document.querySelectorAll("[data-edit-active]").forEach(function(n){ n.removeAttribute("data-edit-active"); });
                t.dataset.editActive = "1";
                var rect = t.getBoundingClientRect();
                var value = "";
                if (t.tagName === "IMG") value = t.getAttribute("src") || "";
                else value = (t.textContent || "").trim();
                window.parent.postMessage({
                  type: "ai-edit-click",
                  key: t.dataset.editKey,
                  editType: t.dataset.editType || "text",
                  value: value,
                  tag: t.tagName,
                  rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
                }, "*");
              }, true);
            })();`,
          }}
        />
      </body>
    </html>
  );
}
