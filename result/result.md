#pre-commit run --all-files --hook-stage push -v

[INFO] Installing environment for https://github.com/pre-commit/mirrors-eslint.
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
[INFO] Installing environment for https://github.com/pre-commit/mirrors-prettier.
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
fix end of files................................................................Passed
- hook id: end-of-file-fixer
- duration: 0.05s
check json......................................................................Passed
- hook id: check-json
- duration: 0.04s
check yaml..................................................(no files to check)Skipped
- hook id: check-yaml
detect private key..............................................................Passed
- hook id: detect-private-key
- duration: 0.05s
Security Pre-Push Hook..........................................................Failed
- hook id: security-pre-push-hook
- duration: 6.14s
- exit code: 1

[INFO] === INICIANDO VERIFICAÇÕES DE SEGURANÇA PRE-PUSH ===
[INFO] Verificando versões das ferramentas...
[INFO] Java version: 11.0.28
[INFO] Node version: v20.19.4
[INFO] npm version: 11.5.2
[INFO] Tipo de projeto detectado: node
[INFO] Verificando se a branch está à frente da master...
[SUCCESS] Branch atualizada em relação a origin/main
[INFO] Executando SAST para projeto node...
[INFO] Executando SAST para Node.js...
[INFO] Executando Semgrep para Node.js...
/usr/lib/python3/dist-packages/requests/__init__.py:87: RequestsDependencyWarning: urllib3 (2.5.0) or chardet (4.0.0) doesn't match a supported version!
  warnings.warn("urllib3 ({}) or chardet ({}) doesn't match a supported "
/home/ubuntu/.local/lib/python3.10/site-packages/opentelemetry/instrumentation/dependencies.py:4: UserWarning: pkg_resources is deprecated as an API. See https://setuptools.pypa.io/en/latest/pkg_resources.html. The pkg_resources package is slated for removal as early as 2025-11-30. Refrain from using this package or pin to Setuptools<81.
  from pkg_resources import (
                  
                  
┌────────────────┐
│ Debugging Info │
└────────────────┘
                  
  SCAN ENVIRONMENT
  versions    - semgrep 1.134.0 on      
                python 3.10.12          
  environment - running in environment  
                git, triggering event is
                unknown                 
                                        
  Scanning 9 files (only git-tracked)   
  with 542 Code rules:                  
            
  CODE RULES
                                        
  Language      Rules   Files           
 ─────────────────────────────          
  <multilang>       6       9           
  yaml             19       2           
  js               65       1           
  json              3       1           
  bash              1       1           
                                        
  Origin      Rules                     
 ───────────────────                    
  Community     542                     
                                        
                    
  SUPPLY CHAIN RULES
                  
  No rules to run.
                  
          
  PROGRESS
   
  ━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 0:00:00                                        
                
                
┌──────────────┐
│ Scan Summary │
└──────────────┘
✅ CI scan completed successfully.
 • Findings: 0 (0 blocking)
 • Rules run: 542
 • Targets scanned: 9
 • Parsed lines: ~100.0%
 • Scan was limited to files tracked by git
 • For a detailed list of skipped files and lines, run semgrep with the --verbose flag
(need more rules? `semgrep login` for additional free Semgrep Registry rules)

CI scan completed successfully.
  No blocking findings so exiting with code 0
[SUCCESS] Semgrep SAST concluído sem problemas críticos
[INFO] Executando Dependency Scanning para projeto node...
[INFO] Executando Dependency Scanning para Node.js...
[INFO] Executando npm audit...
npm error code ENOLOCK
npm error audit This command requires an existing lockfile.
npm error audit Try creating one first with: npm i --package-lock-only
npm error audit Original error: loadVirtual requires existing shrinkwrap file
npm error A complete log of this run can be found in: /home/ubuntu/.npm/_logs/2025-08-29T01_41_53_875Z-debug-0.log
[ERROR] npm audit encontrou vulnerabilidades críticas
[ERROR] === ALGUMAS VERIFICAÇÕES DE SEGURANÇA FALHARAM ===
[ERROR] Corrija os problemas antes de fazer push
[INFO] Log completo disponível em: /home/ubuntu/environment/git-hook-validar/.security-hook.log

Verifica se a branch está atualizada em relação à default.......................Passed
- hook id: branch-ahead-check
- duration: 0.15s

✅ Branch atualizada em relação a origin/main.

Dependency audit rápido por stack...............................................Passed
- hook id: deps-audit-fast
- duration: 0.03s

✅ Dependency audit rápido concluído (sem falhar build por low/medium localmente).

Salva resultado auditável para o CI.............................................Failed
- hook id: audit-trail
- duration: 0.02s
- exit code: 127

/home/ubuntu/.cache/pre-commit/repost3u2yqz/hooks/audit_trail.sh: line 7: jq: command not found

eslint..........................................................................Failed
- hook id: eslint
- duration: 0.25s
- exit code: 2

Oops! Something went wrong! :(

ESLint: 9.9.0

ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

From ESLint v9.0.0, the default configuration file is now eslint.config.js.
If you are using a .eslintrc.* file, please follow the migration guide
to update your configuration file to the new format:

https://eslint.org/docs/latest/use/configure/migration-guide

If you still have problems after following the migration guide, please stop by
https://eslint.org/chat/help to chat with the team.

prettier........................................................................Failed
- hook id: prettier
- duration: 0.69s
- files were modified by this hook

README.md
src/index.js
