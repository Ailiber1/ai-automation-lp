
import { AIPackage } from './types';

export const PACKAGES: AIPackage[] = [
  {
    id: '1',
    name: '定型業務自動化パッケージ',
    shortDesc: '日常的な繰り返し作業をAIで自動化し、人のミスをゼロにします。',
    longDesc: '毎日のデータ入力、照合、転記などの定型業務をAIとRPAを組み合わせて完全自動化します。',
    features: ['Excel/スプレッドシートへの自動転記', '複数ツール間のデータ同期', '請求書・納品書の自動データ化'],
    workflow: 'ヒアリング → 業務フローの可視化 → AIモデル選定 → 自動化実装',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'routine'
  },
  {
    id: '2',
    name: 'n8n業務フロー自動化',
    shortDesc: 'n8nを活用して、複数のSaaSツールをノンコードでシームレスに連携. ',
    longDesc: 'Slack, Google Workspace, Salesforceなどの主要ツールをn8nで繋ぎ、高度なワークフローを構築します。',
    features: ['複雑な条件分岐の設定', 'Webhook連携によるリアルタイム処理', 'カスタムAPI連携の構築'],
    workflow: '利用中ツールの選定 → 連携フロー設計 → サーバー構築 → テスト運用',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'workflow'
  },
  {
    id: '3',
    name: '社内データ整理AI化',
    shortDesc: '散らばった社内ドキュメントをAIが自動分類し、検索性を向上。',
    longDesc: '膨大なPDFやWordファイルをAIが解析。適切なタグ付けと要約を自動で行います。',
    features: ['AIによる自動要約', 'キーワード・コンテキスト検索', '重複データの自動検出'],
    workflow: '既存ストレージ接続 → AIスキャン実行 → 自動インデックス作成',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'data'
  },
  {
    id: '4',
    name: '問い合わせ対応AI導入',
    shortDesc: '24時間365日、顧客からの質問にAIが最適な回答を提供します。',
    longDesc: '過去のQ&Aやマニュアルを学習させた独自のAIチャットボットをWebサイトやLINEに導入します。',
    features: ['高精度な回答生成', '有人チャットへのスムーズな引き継ぎ', '多言語対応'],
    workflow: 'ナレッジベース構築 → プロンプト調整 → フロントエンド実装',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'support'
  },
  {
    id: '5',
    name: '業務マニュアルAI化',
    shortDesc: '作成が面倒なマニュアルを、動画や指示書からAIが自動生成。',
    longDesc: 'スクリーンレコーディングや断片的な指示から、体系立てられたマニュアルをAIが書き出します。',
    features: ['ステップバイステップ図解生成', '動画からのテキスト起こし', 'PDF/HTML形式でのエクスポート'],
    workflow: '素材提供 → AI解析・構成案作成 → 修正・校正 → 完成',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'manual'
  },
  {
    id: '6',
    name: 'レポート自動生成AI',
    shortDesc: '売上やKPIなどの数値を分析し、インサイトを文章で提供。',
    longDesc: 'ダッシュボードの数字をAIが読み取り、現状の課題と対策を盛り込んだ週次・月次レポートを作成します。',
    features: ['トレンド分析と予測', '経営層向け要約作成', 'PPT/PDF形式での自動出力'],
    workflow: 'データソース連携 → 分析ロジック設定 → テンプレート作成 → 運用',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'report'
  },
  {
    id: '7',
    name: 'Claude業務支援構築',
    shortDesc: '最新のClaudeモデルを業務に最適化。高度な推論で仕事をサポート。',
    longDesc: 'Anthropic社のClaudeを社内専用にカスタマイズ。セキュリティを担保した環境で推論能力を活用します。',
    features: ['長文ドキュメント解析', 'プログラムコードの自動生成', 'クリエイティブ・ライティング'],
    workflow: '要件定義 → 環境構築(API) → プロンプトエンジニアリング',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'claude'
  },
  {
    id: '8',
    name: '社内ツールAI連携',
    shortDesc: '既存の自社ツールにAI機能を後付けし、利便性を劇的に改善。',
    longDesc: 'レガシーな自社システムにモダンなAIインターフェースを追加し、使い勝手を最新化します。',
    features: ['音声入力インターフェース', '自然言語による検索拡張', '入力項目の自動補完'],
    workflow: '既存システム調査 → 連携ポイント抽出 → AIモジュール接続',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'system'
  },
  {
    id: '9',
    name: 'AI動画制作パッケージ',
    shortDesc: 'テキストから高品質なプレゼン動画やPR動画をAIで自動制作。',
    longDesc: 'スクリプトを入力するだけで、ナレーション、映像素材、BGMを組み合わせた動画を生成します。',
    features: ['AIアバターによる解説', '自動字幕・テロップ挿入', '多様なスタイル選択'],
    workflow: 'スクリプト入力 → スタイル選択 → AI生成 → ダウンロード',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'video'
  },
  {
    id: '10',
    name: 'AI広告動画制作',
    shortDesc: 'SNS向けの短尺広告を、AIが複数パターン同時に自動生成。',
    longDesc: 'ターゲットに合わせた訴求パターンの異なる広告動画を大量に作成し、ABテストを容易にします。',
    features: ['トレンドに合わせた構成案', 'バズる音楽の自動選定', 'マルチプラットフォーム最適化'],
    workflow: '商材データ入力 → ターゲット設定 → 複数バリエーション生成',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'ads'
  },
  {
    id: '11',
    name: 'ウェブ制作 × AI支援',
    shortDesc: 'AIを活用してデザイン・コーディングを高速化し、短納期を実現。',
    longDesc: 'ワイヤーフレームからデザイン、React/Next.jsなどのコード生成までAIがトータルサポートします。',
    features: ['AI生成UIパーツ', 'SEO最適化テキスト', 'アクセシビリティチェック'],
    workflow: 'コンセプト定義 → AIデザイン生成 → コーディング支援 → 公開',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'web'
  },
  {
    id: '12',
    name: 'AI活用カスタム業務',
    shortDesc: '画像編集や特殊なアルゴリズムなど、御社独自の課題をAIで解決。',
    longDesc: '特定の業務に特化したAIモデルの微調整や、画像編集AIの実装、独自の業務フロー構築を行います。',
    features: ['プロンプトによる画像編集', '独自モデルのファインチューニング', 'API統合支援'],
    workflow: '課題相談 → プロトタイプ開発 → 本実装 → 保守運用',
    youtubeId: 'dQw4w9WgXcQ',
    iconType: 'custom'
  },
];

export const TAGS = ['n8n', 'Claude', '業務自動化', 'AI動画', '画像編集', 'レポート生成', 'チャットボット'];

export const FAQ_ITEMS = [
  {
    question: 'AI導入にはどれくらいの期間がかかりますか？',
    answer: 'パッケージ内容によりますが、最短で2週間、通常1ヶ月〜2ヶ月程度で本番運用を開始いただけます。'
  },
  {
    question: '既存の社内システム（SaaS等）との連携は可能ですか？',
    answer: 'はい、可能です。n8nやAPI連携を活用し、Slack, Teams, Salesforce, Google Workspaceなど主要なツールとシームレスに連携できます。'
  },
  {
    question: 'セキュリティ面での不安があります。データは安全ですか？',
    answer: '当社ではAIモデルのAPI利用において「学習に使用しない」設定を徹底しております。また、機密情報の取り扱いやネットワーク構成についても、お客様のセキュリティポリシーに準拠した構築を行います。'
  },
  {
    question: '導入後のサポート体制はどうなっていますか？',
    answer: '「安心サポートプラン」をご用意しております。専任担当者によるSlackチャット相談、最新AIモデルへのアップデート対応、月次の稼働レポートなど、導入後も安定して効果を出し続けるための体制を整えています。'
  },
  {
    question: 'パッケージにない独自の業務も自動化できますか？',
    answer: 'はい、「AI活用カスタム業務」にて承ります。御社独自の課題をヒアリングし、最適なAIモデル選定からプロトタイプ開発、本実装まで一貫してサポートいたします。'
  }
];
