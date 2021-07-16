const buildPeriodSchema = require("./schemaBuilders/Period");
const buildKpiMonthSchema = require("./schemaBuilders/KpiMonth");
const buildPracticeSchema = require("./schemaBuilders/Practice");
const buildDirectMailCampaignSchema = require("./schemaBuilders/DirectMailCampaign");
const buildUserSchema = require("./schemaBuilders/User");
const buildNoteSchema = require("./schemaBuilders/Note");
const buildContactSchema = require("./schemaBuilders/Contact");
const buildSeoMonthSchema = require("./schemaBuilders/SeoMonth");
const buildCallRailDaySchema = require("./schemaBuilders/CallRailDay");
const buildLeadSchema = require("./schemaBuilders/Lead");
const buildReportSchema = require("./schemaBuilders/Report");
const buildPhoneLead = require("./schemaBuilders/PhoneLead");

module.exports = function (mongoose) {
    const PeriodSchema = buildPeriodSchema(mongoose);
    const KpiMonthSchema = buildKpiMonthSchema(mongoose, { PeriodSchema });
    const SeoMonthSchema = buildSeoMonthSchema(mongoose, { PeriodSchema });
    const CallRailDaySchema = buildCallRailDaySchema(mongoose, { PeriodSchema });
    const NoteSchema = buildNoteSchema(mongoose);
    const ContactSchema = buildContactSchema(mongoose);
    const PracticeSchema = buildPracticeSchema(mongoose, { PeriodSchema });
    const DirectMailCampaignSchema = buildDirectMailCampaignSchema(mongoose, { PeriodSchema });
    const UserSchema = buildUserSchema(mongoose);
    const LeadSchema = buildLeadSchema(mongoose);
    const ReportSchema = buildReportSchema(mongoose);
    const PhoneLeadSchema = buildPhoneLead(mongoose);

    const Lead = mongoose.model("Lead", LeadSchema);
    const Report = mongoose.model("LeadReport", ReportSchema);
    const PhoneLead = mongoose.model("PhoneLead", PhoneLeadSchema);
    const Practice = mongoose.model("practice-v2", PracticeSchema);
    const Note = mongoose.model("Note", NoteSchema);
    const Contact = mongoose.model("Contact", ContactSchema);
    const DirectMailCampaign = mongoose.model("direct-mail-campaign-v2", DirectMailCampaignSchema);
    const User = mongoose.model("User", UserSchema);
    const KpiMonth = mongoose.model("kpi-month", KpiMonthSchema);
    const SeoMonth = mongoose.model("seo-month", SeoMonthSchema);
    const CallRailDay = mongoose.model("call-rail-day", CallRailDaySchema);

    return {
        Practice,
        Note,
        Contact,
        DirectMailCampaign,
        User,
        KpiMonth,
        SeoMonth,
        CallRailDay,
        Lead,
        Report,
        PhoneLead,
    };
};
