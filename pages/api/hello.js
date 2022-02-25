// req ビルド済みミドルウェア　res: ヘルパー関数kjkj

export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}