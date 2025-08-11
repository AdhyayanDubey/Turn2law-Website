module.exports = {

"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/layout/use-active-path.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useActivePath": (()=>useActivePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
function useActivePath() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return pathname;
}
}}),
"[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$use$2d$active$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/use-active-path.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Logo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 62 79",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M46.3782 0L30.7564 16.3146L36.1293 21.5024L42.6514 14.691V53.3941L6.77247 17.715C4.26262 15.2191 0 17.0044 0 20.5514V79H7.45364V28.9262L43.3326 64.6053C45.8423 67.1011 50.105 65.316 50.105 61.7689V14.691L56.6272 21.5024L62 16.3146L46.3782 0Z",
            fill: "white"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
const Header = ({ hideAuthButtons, leftElement })=>{
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$use$2d$active$2d$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivePath"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "home",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300", "", "relative"),
        children: [
            leftElement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-1/2 -translate-y-1/2 pl-3 flex items-center z-50",
                children: [
                    leftElement,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        "aria-label": "Home",
                        className: "ml-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 45,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 grid grid-cols-3 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center group justify-self-start h-[40px]",
                        children: !leftElement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {}, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 52,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header.tsx",
                            lineNumber: 52,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center justify-center gap-8 text-white text-sm font-body justify-self-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/consult",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:text-primary transition-colors", pathname === "/consult" && "text-primary"),
                                children: "Consult"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/lawgpt",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:text-primary transition-colors", pathname === "/lawgpt" && "text-primary"),
                                children: "LawGPT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#services",
                                className: "hover:text-primary transition-colors",
                                children: "Resources"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#pricing",
                                className: "hover:text-primary transition-colors",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    !hideAuthButtons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 justify-self-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                asChild: true,
                                className: "text-white hover:bg-white/10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                className: "rounded-full bg-secondary hover:bg-secondary/90 text-white px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    children: "Signup"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/app/lawgpt/Animation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WowAhhAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
function WowAhhAnimation() {
    const count = 4;
    const items = Array.from({
        length: count
    });
    const widthClasses = [
        "w-28",
        "w-32",
        "w-36",
        "w-40"
    ];
    const opacities = [
        "opacity-5",
        "opacity-10",
        "opacity-15",
        "opacity-20"
    ];
    const boxBase = "bg-white mb-4 aspect-[4/5] h-[20rem]";
    const speed = 15; // seconds per full cycle
    // Calculate wrapper height so exactly 3 items (max size + margin)
    // max width = 10rem → height = 10rem * 5/4 = 12.5rem
    // mb-4 = 1rem → total per box = 13.5rem
    // 3 * 13.5rem = 40.5rem
    const wrapperH = "h-[70rem]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " fixed top-0 left-0 w-screen flex justify-between z-10 pointer-events-none ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden ${wrapperH} flex flex-col h-screen items-start`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            "0%",
                            "-50%"
                        ]
                    },
                    transition: {
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity
                    },
                    className: "flex flex-col items-start",
                    children: [
                        ...items,
                        ...items
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
                ${boxBase}
                rounded-r-2xl
                ${widthClasses[i % count]}
                ${opacities[i % count]}
              `
                        }, i, false, {
                            fileName: "[project]/src/app/lawgpt/Animation.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/Animation.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/Animation.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden ${wrapperH} flex flex-col h-screen items-end`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            "-50%",
                            "0%"
                        ]
                    },
                    transition: {
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity
                    },
                    className: "flex flex-col items-end",
                    children: [
                        ...items,
                        ...items
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
          ${boxBase}
          rounded-l-2xl
          ${widthClasses[i % count]}
          ${opacities[i % count]}
        `
                        }, i, false, {
                            fileName: "[project]/src/app/lawgpt/Animation.tsx",
                            lineNumber: 63,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/Animation.tsx",
                    lineNumber: 53,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/Animation.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lawgpt/Animation.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/lawgpt/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LawGPTPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lawgpt$2f$Animation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lawgpt/Animation.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Simple skeleton loader component
function SkeletonLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 rounded bg-neutral-400/60 animate-pulse",
                style: {
                    width: '80%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 rounded bg-neutral-400/40 animate-pulse",
                style: {
                    width: '60%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 rounded bg-neutral-400/50 animate-pulse",
                style: {
                    width: '70%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 rounded bg-neutral-400/30 animate-pulse",
                style: {
                    width: '40%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 rounded bg-neutral-400/20 animate-pulse",
                style: {
                    width: '30%'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lawgpt/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
// Custom LawGPT Sidebar
function LawGPTSidebar({ onClose }) {
    const mockChats = [
        "Chat title",
        "Chat title",
        "Chat title",
        "Chat title",
        "Chat title",
        "Chat title",
        "Chat title"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 h-screen w-[340px] z-[100] bg-[#202020] border-r border-[#232323] flex flex-col shadow-2xl",
        style: {
            minWidth: 340
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-7 pt-3 pb-2",
                style: {
                    minHeight: 56
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "31",
                                height: "31",
                                viewBox: "0 0 31 31",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3.35028 11.6585C5.38323 9.62556 8.67069 9.61698 10.693 11.6393L14.0619 15.0082L10.7122 18.3579C8.67927 20.3908 5.39181 20.3994 3.36946 18.377L0.000606868 15.0082L3.35028 11.6585Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.3581 3.34931C20.391 5.38225 20.3996 8.66971 18.3773 10.6921L15.0084 14.0609L11.6587 10.7112C9.6258 8.6783 9.61722 5.39083 11.6396 3.36848L15.0084 -0.000370287L18.3581 3.34931Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.4934 19.1696C20.5263 21.2026 20.5033 24.5216 18.4421 26.5828L15.0085 30.0164L11.6588 26.6668C9.62585 24.6338 9.64879 21.3148 11.71 19.2536L15.1437 15.8199L18.4934 19.1696Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-2xl text-white/80",
                                style: {
                                    fontFamily: 'Instrument Sans, sans-serif'
                                },
                                children: "LawGPT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "ml-2 flex items-center justify-center h-[45px] w-[45px] transition-colors focus:outline-none",
                        style: {
                            boxShadow: 'none',
                            background: 'none',
                            borderRadius: 9999,
                            padding: 0
                        },
                        "aria-label": "Close sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "29",
                            height: "29",
                            viewBox: "0 0 29 29",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M17.0484 8.0849C17.3881 8.42467 17.3881 8.97551 17.0484 9.31527L11.8635 14.5001L17.0484 19.6849C17.3881 20.0246 17.3881 20.5754 17.0484 20.9153C16.7086 21.255 16.1577 21.255 15.818 20.9153L10.018 15.1153C9.85484 14.9521 9.76318 14.7308 9.76318 14.5001C9.76318 14.2693 9.85484 14.0481 10.018 13.8849L15.818 8.0849C16.1577 7.74514 16.7086 7.74514 17.0484 8.0849Z",
                                    fill: "white",
                                    style: {
                                        fill: 'white',
                                        fillOpacity: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M10.2852 8.0849C10.6249 8.42467 10.6249 8.97551 10.2852 9.31527L5.10035 14.5001L10.2852 19.6849C10.6249 20.0246 10.6249 20.5754 10.2852 20.9153C9.94542 21.255 9.39456 21.255 9.05481 20.9153L3.25481 15.1153C3.09166 14.9521 3 14.7308 3 14.5001C3 14.2693 3.09166 14.0481 3.25481 13.8849L9.05481 8.0849C9.39456 7.74514 9.94542 7.74514 10.2852 8.0849Z",
                                    fill: "white",
                                    style: {
                                        fill: 'white',
                                        fillOpacity: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-7 pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: mockChats.map((chat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `font-bold text-[1.18rem] text-white flex items-center transition-colors cursor-pointer select-none ` + (i === 0 ? 'bg-[#3A3A3A] text-white' : 'hover:bg-[#232323] text-white/90'),
                            style: {
                                width: 239,
                                height: 42,
                                borderRadius: 13,
                                paddingLeft: 22,
                                paddingRight: 22,
                                fontFamily: 'Instrument Sans, sans-serif',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                background: i === 0 ? '#3A3A3A' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 0,
                                marginRight: 0,
                                boxSizing: 'border-box'
                            },
                            children: chat
                        }, i, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-6"
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lawgpt/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
// Auto-sizing chat bubble component
function AutoBubble({ message, messageId }) {
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [bubbleSize, setBubbleSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 120,
        height: 60
    }); // Reduced initial width
    const [pop, setPop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCalculated, setIsCalculated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate bubble size immediately when message changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const calculateSize = ()=>{
            const padding = 36;
            const verticalPadding = 36;
            const minWidth = 120; // Reduced minimum width for short messages
            const minHeight = 60;
            const maxSingleLineWidth = 400; // Slightly increased threshold
            const wrapWidth = 380; // Increased wrap width for longer text
            // Create a unique container for this specific message measurement
            const measureContainer = document.createElement('div');
            measureContainer.style.position = 'absolute';
            measureContainer.style.visibility = 'hidden';
            measureContainer.style.top = '-9999px';
            measureContainer.style.left = '-9999px';
            measureContainer.style.pointerEvents = 'none';
            measureContainer.id = `bubble-measure-${messageId}`;
            document.body.appendChild(measureContainer);
            try {
                // First, measure as single line
                const singleLineDiv = document.createElement('div');
                singleLineDiv.style.fontSize = '20px';
                singleLineDiv.style.fontFamily = 'Instrument Sans, sans-serif';
                singleLineDiv.style.fontWeight = '600';
                singleLineDiv.style.lineHeight = '24px';
                singleLineDiv.style.whiteSpace = 'nowrap';
                singleLineDiv.style.display = 'inline-block';
                singleLineDiv.textContent = message;
                measureContainer.appendChild(singleLineDiv);
                const naturalWidth = singleLineDiv.offsetWidth;
                const singleLineWidth = naturalWidth + padding;
                let finalWidth, finalHeight;
                if (singleLineWidth > maxSingleLineWidth) {
                    // Text needs wrapping
                    const wrappedDiv = document.createElement('div');
                    wrappedDiv.style.fontSize = '20px';
                    wrappedDiv.style.fontFamily = 'Instrument Sans, sans-serif';
                    wrappedDiv.style.fontWeight = '600';
                    wrappedDiv.style.lineHeight = '24px';
                    wrappedDiv.style.whiteSpace = 'pre-wrap';
                    wrappedDiv.style.wordBreak = 'break-word';
                    wrappedDiv.style.overflowWrap = 'break-word';
                    wrappedDiv.style.width = `${wrapWidth}px`;
                    wrappedDiv.textContent = message;
                    measureContainer.appendChild(wrappedDiv);
                    const wrappedHeight = wrappedDiv.offsetHeight;
                    finalWidth = wrapWidth + padding;
                    finalHeight = Math.max(minHeight, wrappedHeight + verticalPadding);
                } else {
                    // Single line - use natural width but respect minimum
                    finalWidth = Math.max(singleLineWidth, minWidth);
                    finalHeight = minHeight;
                }
                setBubbleSize({
                    width: finalWidth,
                    height: finalHeight
                });
                setIsCalculated(true);
                // Pop animation
                setPop(true);
                setTimeout(()=>setPop(false), 200);
            } finally{
                // Clean up measurement container
                document.body.removeChild(measureContainer);
            }
        };
        if (message && messageId) {
            // Reset state for new calculation
            setIsCalculated(false);
            setBubbleSize({
                width: 120,
                height: 60
            }); // Reduced reset width
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(()=>{
                calculateSize();
            });
        }
    }, [
        message,
        messageId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: bubbleSize.width,
            height: bubbleSize.height,
            viewBox: `0 0 ${bubbleSize.width} ${bubbleSize.height}`,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: `pointer-events-auto transition-all duration-300 ${pop ? 'scale-105' : 'scale-100'}`,
            style: {
                filter: 'drop-shadow(0 4px 16px rgba(60,155,151,0.18))',
                borderRadius: 32,
                transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M0 28C0 12.536 12.536 0 28 0H${bubbleSize.width - 28}C${bubbleSize.width - 12.536} 0 ${bubbleSize.width} 12.536 ${bubbleSize.width} 28V${bubbleSize.height - 28}C${bubbleSize.width} ${bubbleSize.height - 12.536} ${bubbleSize.width - 12.536} ${bubbleSize.height} ${bubbleSize.width - 28} ${bubbleSize.height}H28C12.536 ${bubbleSize.height} 0 ${bubbleSize.height - 12.536} 0 ${bubbleSize.height - 28}V28Z`,
                    fill: "#3C9B97",
                    fillOpacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                    x: "18",
                    y: "18",
                    width: bubbleSize.width - 36,
                    height: bubbleSize.height - 36,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: textRef,
                        style: {
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: bubbleSize.height <= 60 ? 'center' : 'flex-start',
                            justifyContent: 'flex-start',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: 20,
                            lineHeight: '24px',
                            fontFamily: 'Instrument Sans, sans-serif',
                            textAlign: 'left',
                            wordBreak: 'break-word',
                            padding: '0',
                            margin: '0',
                            boxSizing: 'border-box',
                            overflow: 'visible',
                            whiteSpace: bubbleSize.width > 400 ? 'pre-wrap' : 'nowrap',
                            overflowWrap: 'break-word',
                            maxWidth: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: '100%',
                                display: 'block',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                                whiteSpace: bubbleSize.width > 400 ? 'pre-wrap' : 'nowrap' // Updated threshold
                            },
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, `${messageId}-${isCalculated}`, true, {
            fileName: "[project]/src/app/lawgpt/page.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/lawgpt/page.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
function LawGPTHeader({ onSidebarOpen, sidebarOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        leftElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mr-2 flex items-center focus:outline-none",
                    onClick: onSidebarOpen,
                    "aria-label": sidebarOpen ? "Close sidebar" : "Open sidebar",
                    children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "29",
                        height: "29",
                        viewBox: "0 0 29 29",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            transform: 'scaleX(-1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M11.9516 20.9151C11.6119 20.5753 11.6119 20.0245 11.9516 19.6847L17.1365 14.4999L11.9516 9.31508C11.6119 8.97539 11.6119 8.42458 11.9516 8.0847C12.2914 7.74502 12.8423 7.74502 13.182 8.0847L18.982 13.8847C19.1452 14.0479 19.2368 14.2692 19.2368 14.4999C19.2368 14.7307 19.1452 14.9519 18.982 15.1151L13.182 20.9151C12.8423 21.2549 12.2914 21.2549 11.9516 20.9151Z",
                                fill: "white",
                                style: {
                                    fill: 'white',
                                    fillOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 267,
                                columnNumber: 17
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M19.2549 20.9151C18.9151 20.5753 18.9151 20.0245 19.2549 19.6847L24.4397 14.4999L19.2549 9.31508C18.9151 8.97539 18.9151 8.42458 19.2549 8.0847C19.5946 7.74502 20.1455 7.74502 20.4852 8.0847L26.2852 13.8847C26.4484 14.0479 26.54 14.2692 26.54 14.4999C26.54 14.7307 26.4484 14.9519 26.2852 15.1151L20.4852 20.9151C20.1455 21.2549 19.5946 21.2549 19.2549 20.9151Z",
                                fill: "white",
                                style: {
                                    fill: 'white',
                                    fillOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 266,
                        columnNumber: 15
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "29",
                        height: "29",
                        viewBox: "0 0 29 29",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M11.9516 20.9151C11.6119 20.5753 11.6119 20.0245 11.9516 19.6847L17.1365 14.4999L11.9516 9.31508C11.6119 8.97539 11.6119 8.42458 11.9516 8.0847C12.2914 7.74502 12.8423 7.74502 13.182 8.0847L18.982 13.8847C19.1452 14.0479 19.2368 14.2692 19.2368 14.4999C19.2368 14.7307 19.1452 14.9519 18.982 15.1151L13.182 20.9151C12.8423 21.2549 12.2914 21.2549 11.9516 20.9151Z",
                                fill: "white",
                                style: {
                                    fill: 'white',
                                    fillOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 272,
                                columnNumber: 17
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M19.2549 20.9151C18.9151 20.5753 18.9151 20.0245 19.2549 19.6847L24.4397 14.4999L19.2549 9.31508C18.9151 8.97539 18.9151 8.42458 19.2549 8.0847C19.5946 7.74502 20.1455 7.74502 20.4852 8.0847L26.2852 13.8847C26.4484 14.0479 26.54 14.2692 26.54 14.4999C26.54 14.7307 26.4484 14.9519 26.2852 15.1151L20.4852 20.9151C20.1455 21.2549 19.5946 21.2549 19.2549 20.9151Z",
                                fill: "white",
                                style: {
                                    fill: 'white',
                                    fillOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 273,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 271,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "2",
                    height: "45",
                    viewBox: "0 0 2 45",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        position: 'fixed',
                        right: -17,
                        top: -7,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    "aria-label": "Separator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 1V44",
                        stroke: "#FEFEFE",
                        strokeOpacity: "0.4",
                        style: {
                            stroke: '#FEFEFE',
                            strokeOpacity: 0.4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 295,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 278,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "31",
                    height: "31",
                    viewBox: "0 0 31 31",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        position: 'fixed',
                        right: -65,
                        top: 0,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingRight: '0px'
                    },
                    "aria-label": "LawGPT logo",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3.3498 11.6585C5.38274 9.62556 8.6702 9.61698 10.6926 11.6393L14.0614 15.0082L10.7117 18.3579C8.67879 20.3908 5.39132 20.3994 3.36897 18.377L0.000118587 15.0082L3.3498 11.6585Z",
                            fill: "#3C9B97",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18.3581 3.35028C20.391 5.38323 20.3996 8.67069 18.3773 10.693L15.0084 14.0619L11.6587 10.7122C9.6258 8.67927 9.61722 5.39181 11.6396 3.36946L15.0084 0.000606276L18.3581 3.35028Z",
                            fill: "#3C9B97",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z",
                            fill: "#3C9B97",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M18.4929 19.1696C20.5258 21.2026 20.5029 24.5216 18.4416 26.5828L15.008 30.0164L11.6583 26.6668C9.62536 24.6338 9.64831 21.3148 11.7096 19.2536L15.1432 15.8199L18.4929 19.1696Z",
                            fill: "#3C9B97",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lawgpt/page.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/lawgpt/page.tsx",
            lineNumber: 259,
            columnNumber: 9
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/app/lawgpt/page.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
function LawGPTPage() {
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [aiLoading, setAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomTextareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ensure page always starts at the top when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Force immediate scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []); // Run only once on mount
    // Auto-scroll to bottom when chat history changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chatHistory.length > 0 && chatContainerRef.current) {
            const scrollToBottom = ()=>{
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            };
            // Multiple scroll attempts to ensure it works with dynamic content
            scrollToBottom();
            const timeoutId1 = setTimeout(scrollToBottom, 50);
            const timeoutId2 = setTimeout(scrollToBottom, 200);
            const timeoutId3 = setTimeout(scrollToBottom, 500);
            return ()=>{
                clearTimeout(timeoutId1);
                clearTimeout(timeoutId2);
                clearTimeout(timeoutId3);
            };
        }
    }, [
        chatHistory.length
    ]);
    // Apply scroll prevention only when there's no chat history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chatHistory.length > 0) return; // Don't prevent scrolling if there's chat history
        // Force scroll to top and prevent any scrolling
        const preventScroll = (e)=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        };
        // Temporarily prevent scrolling during initial load
        window.addEventListener('scroll', preventScroll, {
            passive: false
        });
        // Remove scroll prevention after a short delay
        const timeoutId = setTimeout(()=>{
            window.removeEventListener('scroll', preventScroll);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }, 500);
        return ()=>{
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', preventScroll);
        };
    }, [
        chatHistory
    ]); // Use the entire chatHistory array instead of just length
    // Additional effect to ensure the header stays visible on any layout changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ensureTopPosition = ()=>{
            if (window.scrollY === 0) return; // Already at top, no need to scroll
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        };
        // Check periodically in the first few seconds after mount
        const interval = setInterval(ensureTopPosition, 100);
        const timeout = setTimeout(()=>clearInterval(interval), 2000);
        return ()=>{
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);
    const handleSidebarToggle = ()=>setSidebarOpen((open)=>!open);
    const handleSend = ()=>{
        if (message.trim() !== "") {
            // Add user message to chat history
            const userMessage = {
                id: Date.now().toString(),
                type: 'user',
                content: message.trim(),
                timestamp: new Date()
            };
            setChatHistory((prev)=>[
                    ...prev,
                    userMessage
                ]);
            setAiLoading(true);
            // Simulate AI reply: set title and show skeleton, then show content
            setTimeout(()=>{
                // For demo, just use a simple mapping or fallback
                let title = "AI Response";
                if (message.toLowerCase().includes("copyright")) title = "Copyright Action";
                else if (message.toLowerCase().includes("divorce")) title = "Divorce Law";
                else if (message.toLowerCase().includes("property")) title = "Property Dispute";
                setTimeout(()=>{
                    const aiMessage = {
                        id: (Date.now() + 1).toString(),
                        type: 'ai',
                        content: "This is a sample AI-generated answer to your question. Replace this with your actual AI response.",
                        title: title,
                        timestamp: new Date()
                    };
                    setChatHistory((prev)=>[
                            ...prev,
                            aiMessage
                        ]);
                    setAiLoading(false);
                }, 1800);
            }, 600);
            setMessage("");
            // Reset textarea for bottom input - use the appropriate ref based on current state
            const currentTextarea = chatHistory.length === 0 ? textareaRef.current : bottomTextareaRef.current;
            if (currentTextarea) {
                currentTextarea.style.height = '24px';
            }
            // Scroll to bottom after message is sent  
            const scrollToBottom = ()=>{
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            };
            // Multiple scroll attempts
            setTimeout(scrollToBottom, 10);
            setTimeout(scrollToBottom, 100);
            setTimeout(scrollToBottom, 300);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LawGPTHeader, {
                onSidebarOpen: handleSidebarToggle,
                sidebarOpen: sidebarOpen
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lawgpt$2f$Animation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LawGPTSidebar, {
                onClose: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 489,
                columnNumber: 9
            }, this),
            chatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full bg-background font-body flex flex-col items-center justify-start overflow-hidden",
                style: {
                    paddingTop: '240px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "31",
                                height: "31",
                                viewBox: "0 0 31 31",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3.35028 11.6585C5.38323 9.62556 8.67069 9.61698 10.693 11.6393L14.0619 15.0082L10.7122 18.3579C8.67927 20.3908 5.39181 20.3994 3.36946 18.377L0.000606868 15.0082L3.35028 11.6585Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.3581 3.34931C20.391 5.38225 20.3996 8.66971 18.3773 10.6921L15.0084 14.0609L11.6587 10.7112C9.6258 8.6783 9.61722 5.39083 11.6396 3.36848L15.0084 -0.000370287L18.3581 3.34931Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18.4934 19.1696C20.5263 21.2026 20.5033 24.5216 18.4421 26.5828L15.0085 30.0164L11.6588 26.6668C9.62585 24.6338 9.64879 21.3148 11.71 19.2536L15.1437 15.8199L18.4934 19.1696Z",
                                        fill: "#3C9B97",
                                        fillOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[20px] leading-6 text-white/60",
                                style: {
                                    fontFamily: 'Instrument Sans, sans-serif'
                                },
                                children: "LawGPT"
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 495,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-[40px] leading-[48px] text-white mb-8 text-center",
                        style: {
                            fontFamily: 'Instrument Sans, sans-serif'
                        },
                        children: "What can I help with"
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto",
                        style: {
                            width: '537px',
                            height: Math.max(132, textareaRef.current ? textareaRef.current.scrollHeight + 80 : 132),
                            minHeight: '132px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "537",
                                height: Math.max(132, textareaRef.current ? textareaRef.current.scrollHeight + 80 : 132),
                                viewBox: `0 0 537 ${Math.max(132, textareaRef.current ? textareaRef.current.scrollHeight + 80 : 132)}`,
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute inset-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "537",
                                    height: Math.max(132, textareaRef.current ? textareaRef.current.scrollHeight + 80 : 132),
                                    rx: "28",
                                    fill: "#232323"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col justify-start px-8 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                ref: textareaRef,
                                                className: "w-full bg-transparent border-none outline-none text-white resize-none",
                                                placeholder: "Ask me anything about law",
                                                value: message,
                                                onChange: (e)=>{
                                                    setMessage(e.target.value);
                                                    // Auto-resize logic
                                                    const textarea = e.target;
                                                    textarea.style.height = 'auto';
                                                    const newHeight = Math.max(24, textarea.scrollHeight);
                                                    textarea.style.height = newHeight + 'px';
                                                },
                                                onKeyDown: handleKeyDown,
                                                style: {
                                                    fontSize: '18px',
                                                    lineHeight: '1.44',
                                                    fontFamily: 'Instrument Sans, sans-serif',
                                                    fontWeight: '400',
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    padding: '0',
                                                    margin: '0',
                                                    minHeight: '24px',
                                                    maxHeight: 'none',
                                                    overflowY: 'hidden',
                                                    overflowX: 'hidden',
                                                    wordWrap: 'break-word',
                                                    whiteSpace: 'pre-wrap',
                                                    boxSizing: 'border-box'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 right-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors",
                                            onClick: handleSend,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M8 13C7.86739 13 7.74021 12.9473 7.64645 12.8536C7.55268 12.7598 7.5 12.6326 7.5 12.5L7.5 4.914L5.35355 7.06066C5.30631 7.1079 5.25 7.14504 5.1879 7.17025C5.12581 7.19547 5.05901 7.20826 4.99155 7.20826C4.92409 7.20826 4.85729 7.19547 4.7952 7.17025C4.7331 7.14504 4.67678 7.1079 4.62955 7.06066C4.58231 7.01343 4.54517 6.95711 4.51995 6.89502C4.49474 6.83292 4.48195 6.76612 4.48195 6.69866C4.48195 6.6312 4.49474 6.5644 4.51995 6.50231C4.54517 6.44021 4.58231 6.38389 4.62955 6.33666L7.62955 3.33666C7.67678 3.28942 7.7331 3.25228 7.7952 3.22707C7.85729 3.20185 7.92409 3.18906 7.99155 3.18906C8.05901 3.18906 8.12581 3.20185 8.1879 3.22707C8.25 3.25228 8.30632 3.28942 8.35355 3.33666L11.3536 6.33666C11.4008 6.38389 11.4379 6.44021 11.4632 6.50231C11.4884 6.5644 11.5012 6.6312 11.5012 6.69866C11.5012 6.76612 11.4884 6.83292 11.4632 6.89502C11.4379 6.95711 11.4008 7.01343 11.3536 7.06066C11.2598 7.15443 11.1326 7.20711 11 7.20711C10.9325 7.20711 10.8657 7.19432 10.8036 7.16911C10.7415 7.14389 10.6852 7.10675 10.638 7.05952L8.5 4.914L8.5 12.5C8.5 12.6326 8.44732 12.7598 8.35355 12.8536C8.25979 12.9473 8.13261 13 8 13Z",
                                                    fill: "#0E0E0E"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 493,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full bg-background font-body flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        style: {
                            paddingTop: '100px',
                            paddingBottom: '140px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: chatContainerRef,
                            className: "w-full max-w-4xl mx-auto px-8 flex-1 overflow-y-auto scrollbar-hide",
                            style: {
                                paddingBottom: '60px',
                                maxHeight: 'calc(100vh - 240px)' // Better height calculation
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    chatHistory.map((chat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: chat.type === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-lg",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoBubble, {
                                                            message: chat.content,
                                                            messageId: chat.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 w-full",
                                                children: [
                                                    chat.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-white text-[2.5rem] font-bold",
                                                        style: {
                                                            fontFamily: 'Instrument Sans, sans-serif'
                                                        },
                                                        children: chat.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/90 text-lg leading-7",
                                                        style: {
                                                            fontFamily: 'Instrument Sans, sans-serif'
                                                        },
                                                        children: chat.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 23
                                            }, this)
                                        }, chat.id, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, this)),
                                    aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLoader, {}, void 0, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                lineNumber: 602,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 right-0 p-6 flex justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            style: {
                                width: '537px',
                                height: '62px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "537",
                                    height: "62",
                                    viewBox: "0 0 537 62",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "absolute inset-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "537",
                                        height: "62",
                                        rx: "31",
                                        fill: "#D9D9D9",
                                        fillOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lawgpt/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center px-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            ref: bottomTextareaRef,
                                            className: "flex-1 bg-transparent border-none outline-none text-white font-medium resize-none",
                                            placeholder: "Ask me anything about law",
                                            value: message,
                                            onChange: (e)=>{
                                                setMessage(e.target.value);
                                            },
                                            onKeyDown: handleKeyDown,
                                            style: {
                                                fontSize: '18px',
                                                lineHeight: '1.5',
                                                fontFamily: 'Instrument Sans, sans-serif',
                                                color: '#FEFEFE',
                                                opacity: 0.5,
                                                padding: '0',
                                                margin: '0',
                                                height: '24px',
                                                maxHeight: '24px',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "ml-4 w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer flex-shrink-0",
                                            onClick: handleSend,
                                            style: {
                                                marginLeft: '16px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M8 13C7.86739 13 7.74021 12.9473 7.64645 12.8536C7.55268 12.7598 7.5 12.6326 7.5 12.5L7.5 4.914L5.35355 7.06066C5.30631 7.1079 5.25 7.14504 5.1879 7.17025C5.12581 7.19547 5.05901 7.20826 4.99155 7.20826C4.92409 7.20826 4.85729 7.19547 4.7952 7.17025C4.7331 7.14504 4.67678 7.1079 4.62955 7.06066C4.58231 7.01343 4.54517 6.95711 4.51995 6.89502C4.49474 6.83292 4.48195 6.76612 4.48195 6.69866C4.48195 6.6312 4.49474 6.5644 4.51995 6.50231C4.54517 6.44021 4.58231 6.38389 4.62955 6.33666L7.62955 3.33666C7.67678 3.28942 7.7331 3.25228 7.7952 3.22707C7.85729 3.20185 7.92409 3.18906 7.99155 3.18906C8.05901 3.18906 8.12581 3.20185 8.1879 3.22707C8.25 3.25228 8.30632 3.28942 8.35355 3.33666L11.3536 6.33666C11.4008 6.38389 11.4379 6.44021 11.4632 6.50231C11.4884 6.5644 11.5012 6.6312 11.5012 6.69866C11.5012 6.76612 11.4884 6.83292 11.4632 6.89502C11.4379 6.95711 11.4008 7.01343 11.3536 7.06066C11.2598 7.15443 11.1326 7.20711 11 7.20711C10.9325 7.20711 10.8657 7.19432 10.8036 7.16911C10.7415 7.14389 10.6852 7.10675 10.638 7.05952L8.5 4.914L8.5 12.5C8.5 12.6326 8.44732 12.7598 8.35355 12.8536C8.25979 12.9473 8.13261 13 8 13Z",
                                                    fill: "#0E0E0E",
                                                    fillOpacity: "0.933333"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/lawgpt/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lawgpt/page.tsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lawgpt/page.tsx",
                                    lineNumber: 645,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lawgpt/page.tsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/lawgpt/page.tsx",
                        lineNumber: 637,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/lawgpt/page.tsx",
                lineNumber: 590,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lawgpt/page.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_971ac898._.js.map