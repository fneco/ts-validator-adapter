# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a TypeScript monorepo that provides a unified adapter interface for various TypeScript validation libraries. The project uses pnpm workspaces and has the following structure:

- `packages/core/` - Core types and constants shared across all adapters
- `packages/adapter/` - Individual adapter implementations for different validation libraries:
  - `ajv/` - Ajv schema validator adapter
  - `arktype/` - Arktype validator adapter
  - `typebox/` - TypeBox validator adapter
  - `valibot/` - Valibot validator adapter
  - `zod/` - Zod validator adapter
  - `zod-mini/` - Zod-mini validator adapter
- `packages/periphery/` - Shared utilities, test kits, and helper functions
- `projects/demo-with-vite/` - Demo Vite project showcasing validation performance
- `projects/stats-view/` - Astro project for displaying validation statistics

## Common Commands

**Root level commands:**

- `pnpm typecheck` - Run type checking across all packages
- `pnpm test` - Run tests across all packages (if present)

**Vite demo project (projects/demo-with-vite/):**

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes TypeScript compilation)
- `pnpm gen-stats` - Generate validation performance statistics
- `pnpm typecheck` - Type check without emitting files
- `pnpm lint` - Run ESLint
- `pnpm test` - Run vitest tests

**Stats view project (projects/stats-view/):**

- `pnpm dev` - Start Astro development server
- `pnpm build` - Build Astro site
- `pnpm copy-gen` - Copy generated files

## Architecture

The project implements a common adapter pattern where each validation library is wrapped with a consistent interface defined in `packages/core/`. The main components are:

1. **Core Types** (`packages/core/src/type.ts`): Defines `ValidationResult<T>` with `Success<T>` and `Failure` types
2. **Adapter Pattern**: Each adapter in `packages/adapter/*/src/adapter.ts` implements validation and JSON schema generation
3. **Test Infrastructure** (`packages/periphery/src/test-kit/`): Comprehensive testing utilities for validating adapter behavior
4. **Demo Applications**: Projects showcase performance comparisons and provide real-world usage examples

## Workspace Configuration

- Uses pnpm workspaces with packages defined in `pnpm-workspace.yaml`
- TypeScript path mapping configured in `tsconfig.base.json` for internal packages
- All packages use ES modules (`"type": "module"`)

## Testing

Tests are organized using a shared test kit that validates:

- Basic validation functionality
- JSON schema generation
- Error message consistency
- Performance characteristics

Each adapter package includes comprehensive tests using the shared test patterns from `packages/periphery/src/test-kit/`.
