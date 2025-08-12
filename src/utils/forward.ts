import { FORWARD_WEBHOOK_URL, FORWARD_TO_EMAIL } from "@/config";

export type ForwardPayload = {
  name: string;
  email: string;
  careerResult: any;
  skillScores?: Record<string, number>;
  timestamp?: string;
  source?: string;
};

export async function forwardSubmission(
  payload: ForwardPayload
): Promise<"webhook" | "mailto"> {
  const webhook = FORWARD_WEBHOOK_URL?.trim();

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      return "webhook";
    } catch (e) {
      console.error("Webhook failed, falling back to mailto:", e);
      // fall through to mailto
    }
  }

  const subject = `New Quiz Subscription - ${payload.careerResult?.offer ?? "PM Quiz"}`;
  const skillsText = payload.skillScores
    ? Object.entries(payload.skillScores)
        .map(([k, v]) => `- ${k}: ${v}%`)
        .join("\n")
    : "N/A";

  const body = `New quiz subscription\n\nName: ${payload.name}\nEmail: ${payload.email}\nOffer: ${payload.careerResult?.offer ?? "-"}\nTitle: ${payload.careerResult?.title ?? "-"}\nLevel: ${payload.careerResult?.level ?? "-"}\nTimestamp: ${payload.timestamp ?? new Date().toISOString()}\nSource: ${payload.source ?? window.location.href}\n\nSkill Scores:\n${skillsText}\n`;

  const mailto = `mailto:${FORWARD_TO_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  return "mailto";
}

export default forwardSubmission;
