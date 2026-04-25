// src/app/api/leads/route.js
// Next.js App Router API route — stores leads in memory (swap with DB in production)

const leads = [];

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company } = body;
    if (!name || !email || !company) {
      return Response.json(
        { error: "name, email, and company are required." },
        { status: 400 },
      );
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("[Lead captured]", lead);

    return Response.json(
      { success: true, id: lead.id, message: "Lead captured successfully." },
      { status: 201 },
    );
  } catch (err) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }
}

export async function GET() {
  // In production: authenticate this endpoint before exposing leads
  return Response.json({ total: leads.length, leads });
}
