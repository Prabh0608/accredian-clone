// In-memory store — swap with DB (Prisma / MongoDB) for production
const leads = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      domain,
      candidateCount,
      deliveryMode,
      location,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !company ||
      !domain ||
      !candidateCount ||
      !deliveryMode ||
      !location
    ) {
      return Response.json(
        {
          error:
            "name, email, phone, company, domain, candidate count, delivery mode, and location are required.",
        },
        { status: 400 },
      );
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      submittedAt: new Date().toISOString(),
    };
    leads.push(lead);
    console.log("[Lead]", lead);

    return Response.json({ success: true, id: lead.id }, { status: 201 });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ total: leads.length, leads });
}
