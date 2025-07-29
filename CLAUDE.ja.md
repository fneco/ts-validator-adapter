# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを操作する際のガイダンスを提供します。

## プロジェクト構造

これは、様々な TypeScript バリデーションライブラリに対して統一されたアダプターインターフェースを提供する TypeScript モノレポです。プロジェクトは pnpm ワークスペースを使用し、以下の構造を持っています：

- `packages/core/` - 全てのアダプター間で共有されるコアタイプと定数
- `packages/adapter/` - 異なるバリデーションライブラリの個別アダプター実装：
  - `ajv/` - Ajv スキーマバリデーターアダプター
  - `arktype/` - Arktype バリデーターアダプター
  - `typebox/` - TypeBox バリデーターアダプター
  - `valibot/` - Valibot バリデーターアダプター
  - `zod/` - Zod バリデーターアダプター
  - `zod-mini/` - Zod-mini バリデーターアダプター
- `packages/periphery/` - 共有ユーティリティ、テストキット、ヘルパー関数
- `projects/demo-with-vite/` - バリデーション性能を示すデモ Vite プロジェクト
- `projects/stats-view/` - バリデーション統計を表示する Astro プロジェクト

## 共通コマンド

**ルートレベルコマンド：**

- `pnpm typecheck` - 全パッケージの型チェックを実行
- `pnpm test` - 全パッケージのテストを実行（存在する場合）
- `pnpm update-gen` - デモプロジェクトで統計を生成し、stats-view にコピー（完全ワークフロー）

**個別パッケージ操作：**

- `pnpm --filter @ts-validator-adapter/zod test` - 特定のアダプターのテストを実行
- `pnpm --filter demo-with-vite dev` - 特定のプロジェクトの開発サーバーを起動
- `pnpm --filter "./packages/adapter/*" typecheck` - 全アダプターの型チェックを実行

**Vite デモプロジェクト（projects/demo-with-vite/）：**

- `pnpm dev` - 開発サーバーを起動
- `pnpm build` - 本番用ビルド（TypeScript コンパイルを含む）
- `pnpm gen-stats` - バリデーション性能統計 JSON ファイルを生成
- `pnpm typecheck` - ファイル出力なしで型チェック
- `pnpm lint` - ESLint を実行
- `pnpm test` - vitest テストを実行
- `pnpm analyze` - source-map-explorer でバンドルサイズを分析

**統計ビュープロジェクト（projects/stats-view/）：**

- `pnpm dev` - Tailwind CSS を使用した Astro 開発サーバーを起動
- `pnpm build` - 本番用 Astro サイトをビルド
- `pnpm copy-gen` - デモプロジェクトから生成された統計をコピー

## アーキテクチャ

プロジェクトは、各バリデーションライブラリを`packages/core/`で定義された一貫したインターフェースでラップする共通アダプターパターンを実装しています。主要コンポーネントは：

1. **コアタイプ**（`packages/core/src/type.ts`）：`Success<T>`と`Failure`タイプを持つ`ValidationResult<T>`を定義
2. **アダプターパターン**：`packages/adapter/*/src/adapter.ts`の各アダプターがバリデーションと JSON スキーマ生成を実装
3. **テストインフラストラクチャ**（`packages/periphery/src/test-kit/`）：アダプターの動作を検証するための包括的なテストユーティリティ
4. **デモアプリケーション**：性能比較を示し、実用的な使用例を提供するプロジェクト

## ワークスペース設定

- `pnpm-workspace.yaml`で定義されたパッケージを使用した pnpm ワークスペース
- 内部パッケージ用の`tsconfig.base.json`で設定された TypeScript パスマッピング
- 全パッケージで ES modules（`"type": "module"`）を使用
- `workspace:*`パターンで参照される内部パッケージ
- 開発には Node.js 20+と pnpm 8+が必要

## 開発ワークフロー

**統計生成プロセス：**

1. `demo-with-vite`プロジェクトが性能統計を JSON ファイルとして生成
2. `stats-view`プロジェクトがこれらの統計をコピーして Astro 経由で表示
3. ルートで`pnpm update-gen`を使用して完全なワークフローを実行

**パッケージ開発：**

- `packages/adapter/*/`の各アダプターは`packages/core/`の同じインターフェースを実装
- 特定のパッケージで作業するには pnpm フィルタリングを使用：`pnpm --filter <package-name> <command>`
- 全アダプターは`packages/periphery/src/test-kit/`のテストパターンを共有

## テスト

テストは以下を検証する共有テストキットを使用して整理されています：

- 基本的なバリデーション機能
- JSON スキーマ生成
- エラーメッセージの一貫性
- 性能特性

**テスト実行：**

- 全テスト：`pnpm test`
- 特定のアダプター：`pnpm --filter @ts-validator-adapter/zod test`
- 特定のプロジェクト：`pnpm --filter demo-with-vite test`

各アダプターパッケージは`packages/periphery/src/test-kit/`の共有テストパターンを使用した包括的なテストを含んでいます。
