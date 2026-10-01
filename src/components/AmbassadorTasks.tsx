import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Award } from 'lucide-react';

export const AmbassadorTasks: React.FC = () => {
  const [referralCode] = useState("[YOUR_REFERRAL_ID]");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(`https://makemypass.com/event/ai-compassion-participants`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="section-tasks"
      className="relative bg-mist-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-bluegrey-brand/15"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
              What's Expected of You
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-dark-brand leading-[1.08]"
          >
            Your path to ambassadorship.
          </motion.h2>
        </div>

        {/* Vertical Timeline Architecture */}
        <div className="relative pl-6 sm:pl-10 space-y-16 sm:space-y-20">
          
          {/* Vertical Track Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-brand via-bluegrey-brand to-taupe-brand/60" />

          {/* STAGE 01 — ONBOARDING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Stage Milestone Indicator */}
            <div className="absolute -left-[30px] sm:-left-[46px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-brand text-white-brand flex items-center justify-center shadow-md border-4 border-mist-brand">
              <span className="text-xs font-mono font-bold">01</span>
            </div>

            <div className="pl-4 sm:pl-6">
              <div className="inline-block px-3 py-1 rounded-md bg-slate-brand/10 text-slate-brand text-xs font-semibold uppercase tracking-wider mb-3">
                STAGE 01 · ONBOARDING
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-dark-brand tracking-tight">
                Initial Preparation & Alignment
              </h3>

              {/* Tasks List */}
              <div className="mt-6 space-y-6">
                
                {/* Task 01 */}
                <div className="p-5 rounded-2xl bg-white-brand/70 border border-bluegrey-brand/20 shadow-sm flex items-start gap-4">
                  <span className="text-sm font-mono text-taupe-brand font-bold mt-0.5">01</span>
                  <div>
                    <h4 className="text-base font-semibold text-dark-brand">
                      Add your LinkedIn Ambassador Badge
                    </h4>
                    <p className="text-xs sm:text-sm text-bluegrey-brand mt-1">
                      Download the certified badge from the kit and update your headline and featured section.
                    </p>
                  </div>
                </div>

                {/* Task 02 */}
                <div className="p-5 rounded-2xl bg-white-brand/70 border border-bluegrey-brand/20 shadow-sm flex items-start gap-4">
                  <span className="text-sm font-mono text-taupe-brand font-bold mt-0.5">02</span>
                  <div>
                    <h4 className="text-base font-semibold text-dark-brand">
                      Share your Twibbon across socials
                    </h4>
                    <p className="text-xs sm:text-sm text-bluegrey-brand mt-1">
                      Apply the Futokoro frame to your profile picture to signal your regional representation.
                    </p>
                  </div>
                </div>

                {/* Task 03 + Preferred Time Form */}
                {/* 
                <div className="p-6 rounded-2xl bg-white-brand border border-slate-brand/30 shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-sm font-mono text-slate-brand font-bold mt-0.5">03</span>
                    <div>
                      <h4 className="text-base font-semibold text-dark-brand">
                        Attend the onboarding call
                      </h4>
                      <p className="text-xs sm:text-sm text-bluegrey-brand mt-0.5">
                        October 1, 2026 · Global live cohort session with Jun Suto and regional mentors
                      </p>
                      <a href="#section-kit" className="inline-block mt-2 text-xs font-semibold text-slate-brand hover:text-dark-brand underline">
                        Access Ambassador Kit &rarr;
                      </a>
                    </div>
                  </div>

                  <form onSubmit={handleSaveTime} className="mt-4 pt-4 border-t border-bluegrey-brand/15">
                    <label className="block text-xs font-semibold tracking-wider uppercase text-slate-brand mb-3">
                      SELECT YOUR PREFERRED TIME
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={\`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 \${
                          selectedCallTime === "06:00–07:00 UTC"
                            ? "bg-slate-brand/5 border-slate-brand text-slate-brand font-semibold shadow-xs"
                            : "bg-mist-brand/40 border-bluegrey-brand/20 text-dark-brand hover:border-bluegrey-brand/40"
                        }\`}
                      >
                        <input
                          type="radio"
                          name="onboarding_time"
                          value="06:00–07:00 UTC"
                          checked={selectedCallTime === "06:00–07:00 UTC"}
                          onChange={(e) => setSelectedCallTime(e.target.value)}
                          className="w-4 h-4 text-slate-brand focus:ring-slate-brand"
                        />
                        <div className="text-xs">
                          <div className="font-mono font-medium">06:00–07:00 UTC</div>
                          <div className="text-[11px] text-bluegrey-brand font-normal">Asia / Oceania / Africa Window</div>
                        </div>
                      </label>
                      <label
                        className={\`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 \${
                          selectedCallTime === "18:00 UTC"
                            ? "bg-slate-brand/5 border-slate-brand text-slate-brand font-semibold shadow-xs"
                            : "bg-mist-brand/40 border-bluegrey-brand/20 text-dark-brand hover:border-bluegrey-brand/40"
                        }\`}
                      >
                        <input
                          type="radio"
                          name="onboarding_time"
                          value="18:00 UTC"
                          checked={selectedCallTime === "18:00 UTC"}
                          onChange={(e) => setSelectedCallTime(e.target.value)}
                          className="w-4 h-4 text-slate-brand focus:ring-slate-brand"
                        />
                        <div className="text-xs">
                          <div className="font-mono font-medium">18:00 UTC</div>
                          <div className="text-[11px] text-bluegrey-brand font-normal">Europe / Americas Window</div>
                        </div>
                      </label>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white-brand bg-slate-brand hover:bg-dark-brand transition-colors"
                      >
                        CONFIRM SLOT
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadIcs}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-brand bg-mist-brand hover:bg-powder-brand/30 border border-bluegrey-brand/20 transition-colors"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Add to Calendar (.ics)</span>
                      </button>
                      {isTimeSaved && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-brand font-medium">
                          <CheckCircle2 className="w-4 h-4 text-taupe-brand" />
                          <span>Saved to your ambassador record.</span>
                        </span>
                      )}
                    </div>
                  </form>
                </div>
                */}

              </div>
            </div>
          </motion.div>

          {/* STAGE 02 — CERTIFICATE OF AMBASSADORSHIP */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Stage Milestone Indicator */}
            <div className="absolute -left-[30px] sm:-left-[46px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-taupe-brand text-white-brand flex items-center justify-center shadow-md border-4 border-mist-brand">
              <span className="text-xs font-mono font-bold">02</span>
            </div>

            <div className="pl-4 sm:pl-6">
              <div className="inline-block px-3 py-1 rounded-md bg-taupe-brand/15 text-taupe-brand text-xs font-semibold uppercase tracking-wider mb-3">
                STAGE 02 · CERTIFICATE OF AMBASSADORSHIP
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-dark-brand tracking-tight">
                Community Activation & Completion
              </h3>

              {/* Tasks List */}
              <div className="mt-6 space-y-6">
                
                {/* Task 04 */}
                <div className="p-6 rounded-2xl bg-white-brand/70 border border-bluegrey-brand/20 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-mono text-taupe-brand font-bold mt-0.5">04</span>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-dark-brand">
                        Bring 10 people to register using your referral code
                      </h4>
                      <p className="text-xs sm:text-sm text-bluegrey-brand mt-1">
                        Encourage your local community, colleagues, and university peers to join the live stream. Share the link along with your Referral ID: <strong className="text-dark-brand">{referralCode}</strong>
                      </p>

                      {/* Referral widget */}
                      <div className="mt-4 p-3 rounded-xl bg-mist-brand/50 border border-bluegrey-brand/20 flex items-center justify-between gap-3">
                        <span className="text-xs font-mono text-slate-brand truncate">
                          https://makemypass.com/event/ai-compassion-participants
                        </span>
                        <button
                          onClick={handleCopyReferral}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-brand text-white-brand text-xs font-medium hover:bg-dark-brand transition-colors shrink-0"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedCode ? "Copied!" : "Copy Link"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Task 05 */}
                <div className="p-5 rounded-2xl bg-white-brand/70 border border-bluegrey-brand/20 shadow-sm flex items-start gap-4">
                  <span className="text-sm font-mono text-taupe-brand font-bold mt-0.5">05</span>
                  <div>
                    <h4 className="text-base font-semibold text-dark-brand">
                      Share one post about the relay and tag us
                    </h4>
                    <p className="text-xs sm:text-sm text-bluegrey-brand mt-1">
                      Highlight the relay schedule, your regional segment, or what compassion in AI means in your local context.
                    </p>
                  </div>
                </div>

                {/* Task 06 */}
                <div className="p-5 rounded-2xl bg-white-brand/70 border border-bluegrey-brand/20 shadow-sm flex items-start gap-4">
                  <span className="text-sm font-mono text-taupe-brand font-bold mt-0.5">06</span>
                  <div>
                    <h4 className="text-base font-semibold text-dark-brand">
                      Showcase yourself or your work at Demo Day
                    </h4>
                    <p className="text-xs sm:text-sm text-bluegrey-brand mt-1 leading-relaxed">
                      Held after your region's relay segment, Demo Day is a chance to network with fellow ambassadors and gain visibility.
                    </p>
                  </div>
                </div>

              </div>

              {/* Certificate of Ambassadorship Banner */}
              <div className="mt-8 p-6 rounded-2xl bg-white-brand border border-taupe-brand/40 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-taupe-brand/20 text-taupe-brand flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-brand">
                    Global Forum Certificate of Ambassadorship
                  </h4>
                  <p className="text-xs text-bluegrey-brand mt-1 leading-relaxed">
                    Upon completing these two stages, you will receive a verifiable digital certificate signed by Jun Suto and the global committee, honoring your leadership in the 2026 inaugural relay.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
