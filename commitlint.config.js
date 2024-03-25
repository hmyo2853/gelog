module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "pkg", // 패키지 추가
        "ci", // ci 구성 파일, 스크립트 변경
        "docs", // md와 같은 documentation의 변경
        "feat", // 새로운 기능 추가
        "fix", // 버그 수정
        "refactor", // 리팩토링 작업(코드 동작은 유지하되, 코드의 가독성과 유지보수성을 높이기 위해 내부구조 변경)
        "css", // css 및 UI 수정
      ],
    ],
    "header-max-length": [2, "always", 150],
  },
};
