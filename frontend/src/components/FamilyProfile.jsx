import React, { useState, useEffect } from "react";
import Profile from "../Asset/profile.jpg";
import arjun from "../Asset/brother.jpg";

const initialFamily = {
  name: "Family",
  cover: "https://i.pinimg.com/1200x/4d/28/20/4d282007519cf75bd802d3e8c879f1ae.jpg",
  avatar: "https://i.pinimg.com/736x/b1/6f/25/b16f25744cb3540049c7227249770769.jpg",
  members: [
    {
      name: "Athira Anil",
      relation: "Me",
      avatar: Profile,
      birthday: "2000-04-30",
      education: [
        { school: "Technical Higher Secondary School, Muttom", year: "2018" },
        { school: "St. Joseph's Collage", year: "2021" },
        { school: "Cochin University of Science and Technology", year: "2024" },
      ],
    },
    {
      name: "Anilkumar",
      relation: "Father",
      avatar: "https://i.pinimg.com/1200x/50/0f/1c/500f1c7741ffb43bdbf3ffe6d7638fb8.jpg",
      birthday: "1975-09-05",
      education: [
        { school: "Govt. Higher Secondary School", year: "1985" },
        { school: "ITI", year: "1990" },
      ],
    },
    {
      name: "Arjun Anil",
      relation: "Brother",
      avatar: arjun,
      birthday: "2005-08-08",
      education: [
        { school: "Secret Heart English Medium Higher Secondary School", year: "2017" },
        { school: "St. Mary's Higher Secondary School" },
        { school: "Ilhia Collage of Arts and Science" },
      ],
    },
    { name: "Preetha Anil", relation: "Mother", avatar: "https://i.pinimg.com/736x/ba/38/f0/ba38f0f79f0650990f293869f93cd029.jpg", birthday: "1976-07-30", education: [{ school: "St. George Higher Secondary School" }] },
    { name: "Anjana Vijayan", relation: "Cousin", avatar: "https://i.pinimg.com/736x/ba/38/f0/ba38f0f79f0650990f293869f93cd029.jpg", birthday: "2010-03-08", education: [{ school: "Technical Higher Secondary School", year: "2014" }, { school: "St. Joseph's Collage", year: "2018" }] },
    { name: "Akhilesh M V", relation: "Cousin", avatar: "https://i.pinimg.com/1200x/50/0f/1c/500f1c7741ffb43bdbf3ffe6d7638fb8.jpg", birthday: "2006-06-15", education: [{ school: "Govt. Higher Secondary School", year: "2017" }, { school: "Nirmala Collage, Muvattupuzha" }] },
    { name: "Avani Sunil", relation: "Cousin", avatar: "https://i.pinimg.com/736x/ba/38/f0/ba38f0f79f0650990f293869f93cd029.jpg", birthday: "2010-03-08", education: [{ school: "Govt. Higher Secondary School, Muttom", year: "2014" }, { school: "St. Joseph's Academy" }] },
    { name: "Avandika", relation: "Cousin", avatar: "https://i.pinimg.com/736x/ba/38/f0/ba38f0f79f0650990f293869f93cd029.jpg", birthday: "2006-05-25", education: [{ school: "St. Mary's Higher Secondary School", year: "2017" }] },
    { name: "Akshith Binil", relation: "Cousin", avatar: "https://i.pinimg.com/1200x/50/0f/1c/500f1c7741ffb43bdbf3ffe6d7638fb8.jpg", birthday: "2018-04-14", education: [{ school: "Saraswathi Vidhya Nikethan", year: "2025" }] },
    { name: "Abhinav B", relation: "Cousin", avatar: "https://i.pinimg.com/1200x/50/0f/1c/500f1c7741ffb43bdbf3ffe6d7638fb8.jpg", birthday: "2006-06-15", education: [{ school: "Secret Heart English Medium Higher Secondary School", year: "2022" }, { school: "St. Mary's Higher Secondary School" }] },
  ],
  photos: new Array(10).fill("https://i.pinimg.com/1200x/8b/8d/68/8b8d68a2fbfd23930de9dbc9da6fb0c2.jpg"),
  events: [{ id: 1, title: "Family Reunion", date: "2025-12-25", desc: "Christmas Reunion" }],
};

export default function FamilyProfile() {
  const [active, setActive] = useState("Timeline");
  const [family, setFamily] = useState(initialFamily);

  const menu = ["Timeline", "Photos", "Members", "Education", "Events", "About", "Albums", "Settings"];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#F9FAFB",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "#fff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      overflow: "hidden",
      display: "block",
    },
    coverWrapper: {
      position: "relative",
      height: 205,
      width: "100%",
      overflow: "hidden",
    },
    coverImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    coverOverlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    coverInfo: {
      position: "absolute",
      left: 24,
      bottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "#fff",
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: "50%",
      border: "4px solid #fff",
      objectFit: "cover",
      boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
    },
    gridWrap: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
    },
    leftCol: {
      width: 260,
      borderRight: "1px solid #F3F4F6",
      padding: 24,
      boxSizing: "border-box",
      backgroundColor: "#fff",
    },
    navCol: {
      width: 200,
      borderRight: "1px solid #F3F4F6",
      padding: 24,
      boxSizing: "border-box",
      backgroundColor: "#F8FAFB",
    },
    mainCol: {
      flex: 1,
      padding: 24,
      height: "70vh",
      overflow: "auto",
      boxSizing: "border-box",
      backgroundColor: "#fff",
    },
    smallTextMuted: { fontSize: 13, color: "#6B7280" },
    thumbGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 3fr)",
      gap: 8,
      marginTop: 12,
    },
    thumbImg: {
      width: "100%",
      height: 80,
      objectFit: "cover",
      borderRadius: 6,
      display: "block",
    },
    menuButton: (isActive) => ({
      width: "100%",
      textAlign: "left",
      padding: "8px 10px",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: isActive ? "#fff" : "transparent",
      boxShadow: isActive ? "0 6px 12px rgba(0,0,0,0.06)" : "none",
      border: "none",
      cursor: "pointer",
    }),
    menuBadge: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "#E5E7EB",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 600,
      color: "#111827",
    },
    headerSticky: {
      position: "sticky",
      top: 0,
      backgroundColor: "#fff",
      paddingTop: 8,
      paddingBottom: 12,
      zIndex: 5,
    },
    divider: { height: 1, backgroundColor: "#F3F4F6", marginTop: 12 },
    postCard: {
      padding: 12,
      backgroundColor: "#F9FAFB",
      borderRadius: 8,
      border: "1px solid #F3F4F6",
    },
    postAvatar: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      backgroundColor: "#E5E7EB",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
    },
    eventCard: {
      padding: 12,
      border: "1px solid #E5E7EB",
      borderRadius: 8,
      backgroundColor: "#fff",
    },
    albumCard: {
      padding: 12,
      border: "1px solid #E5E7EB",
      borderRadius: 8,
      display: "flex",
      gap: 12,
      alignItems: "center",
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 60,
      padding: 20,
      boxSizing: "border-box",
    },
    modalContent: {
      width: "100%",
      maxWidth: 900,
      maxHeight: "90vh",
      overflow: "auto",
      background: "#fff",
      borderRadius: 12,
      padding: 20,
      boxSizing: "border-box",
      position: "relative",
    },
    modalClose: {
      position: "absolute",
      right: 12,
      top: 12,
      width: 36,
      height: 36,
      borderRadius: 8,
      border: "none",
      background: "#F3F4F6",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: "36px",
    },
  };

  const [selectedMember, setSelectedMember] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [eventForm, setEventForm] = useState({ title: "", date: "", desc: "" });

  function addEvent(e) {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) return;
    const existing = family.events || [];
    const id = existing.length ? Math.max(...existing.map((ev) => ev.id)) + 1 : 1;
    const newEvent = {
      id,
      title: eventForm.title,
      date: eventForm.date,
      desc: eventForm.desc,
    };
    setFamily((prev) => ({ ...prev, events: [newEvent, ...(prev.events || [])] }));
    setEventForm({ title: "", date: "", desc: "" });
    setShowEventForm(false);
  }

  function addEducationToMember(memberName, edu) {
    setFamily((prev) => {
      const members = prev.members.map((m) =>
        m.name === memberName ? { ...m, education: [...(m.education || []), edu] } : m
      );
      const updated = { ...prev, members };
      const sel = members.find((m) => m.name === memberName);
      setSelectedMember(sel || null);
      return updated;
    });
  }

  function updateMemberInfo(memberName, updates) {
    setFamily((prev) => {
      const members = prev.members.map((m) => (m.name === memberName ? { ...m, ...updates } : m));
      const updated = { ...prev, members };
      const sel = members.find((m) => m.name === memberName);
      setSelectedMember(sel || null);
      return updated;
    });
  }

  // modal close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && selectedMember) setSelectedMember(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedMember]);

  function renderContent() {
    switch (active) {
      case "Timeline":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              paddingBottom: 24,
              textAlign: "left",
            }}
          >
            <Post author="Athira" text="Went for a weekend picnic!" />
            <Post author="Athira" text="Celebrated Onam together!" />
            <Post author="Abhinav" text="Won the school drawing competition!" />
          </div>
        );

      case "Photos":
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              paddingBottom: 24,
            }}
          >
            {family.photos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`family-${idx}`}
                style={{
                  width: "100%",
                  height: 144,
                  objectFit: "cover",
                  borderRadius: 12,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                }}
                loading="lazy"
              />
            ))}
          </div>
        );

      case "Members":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingBottom: 24,
            }}
          >
            {family.members.map((m) => (
              <div
                key={m.name}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{ cursor: "pointer", textAlign: "left" }}
                  onClick={() => setSelectedMember(m)}
                >
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: 13, color: "#6B7280" }}>
                    {m.relation}
                  </div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>
                    Birthday: {formatDate(m.birthday)}
                  </div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <button
                    style={{
                      padding: "6px 10px",
                      borderRadius: 9999,
                      border: "1px solid #E5E7EB",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "Events":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <button
                  onClick={() => setShowEventForm((s) => !s)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: "1px solid #E5E7EB",
                    background: "#fff",
                    cursor: "pointer",
                  }}
                >
                  + New Event
                </button>
              </div>
            </div>

            {showEventForm && (
              <form
                onSubmit={addEvent}
                style={{
                  padding: 12,
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <input
                  placeholder="Title"
                  value={eventForm.title}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, title: e.target.value })
                  }
                  style={{
                    padding: "8px",
                    border: "1px solid #E5E7EB",
                    borderRadius: 6,
                  }}
                />
                <input
                  type="date"
                  value={eventForm.date}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, date: e.target.value })
                  }
                  style={{
                    padding: "8px",
                    border: "1px solid #E5E7EB",
                    borderRadius: 6,
                  }}
                />
                <textarea
                  placeholder="Description"
                  value={eventForm.desc}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, desc: e.target.value })
                  }
                  style={{
                    padding: "8px",
                    border: "1px solid #E5E7EB",
                    borderRadius: 6,
                  }}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    type="submit"
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "none",
                      background: "#111827",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEventForm(false)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "1px solid #E5E7EB",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(family.events || []).map((ev) => (
                <EventCard key={ev.id} title={ev.title} date={ev.date} desc={ev.desc} />
              ))}
            </div>
          </div>
        );

      case "Education":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingBottom: 24,
            }}
          >
            {family.members.map((m) => (
              <div
                key={m.name}
                style={{
                  padding: 12,
                  border: "1px solid #E5E7EB",
                  borderRadius: 8,
                  background: "#fff",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700 }}>{m.name}</div>
                    <div style={{ color: "#6B7280", fontSize: 13 }}>
                      {m.relation}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {m.education && m.education.length ? (
                    m.education.map((ed, i) => (
                      <div
                        key={i}
                        style={{
                          padding: 8,
                          border: "1px solid #F3F4F6",
                          borderRadius: 6,
                          background: "#FAFBFC",
                        }}
                      >
                        <div style={{ fontWeight: 600 }}>{ed.school}</div>
                        {ed.year && (
                          <div style={{ color: "#6B7280", fontSize: 13 }}>
                            {ed.year}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ color: "#9CA3AF", fontSize: 13 }}>
                      No education entries
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case "Albums":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingBottom: 24,
              textAlign: "left",
            }}
          >
            <AlbumCard title="2025 Vacation" photos={5} />
            <AlbumCard title="Onam" photos={12} />
          </div>
        );

      case "About":
        return (
          <div style={{ paddingBottom: 24 }}>
            <h3>About {family.name}</h3>
            <p style={{ color: "#374151" }}>
              We are a small, happy family who loves cooking, travelling and
              celebrating festivals together. This profile is a private space to
              share memories and plan events.
            </p>
          </div>
        );

      case "Settings":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              paddingBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>Profile Visibility</div>
              <select
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: 6,
                  padding: "6px 8px",
                }}
              >
                <option>Family Only</option>
                <option>Friends</option>
                <option>Public</option>
              </select>
            </div>
            <div style={{ fontSize: 13, color: "#6B7280" }}>settings</div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.coverWrapper}>
          <img src={family.cover} alt="cover" style={styles.coverImg} />
          <div style={styles.coverOverlay} />
          <div style={styles.coverInfo}>
            <img src={family.avatar} alt="avatar" style={styles.avatar} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{family.name}</div>
              <div style={{ fontSize: 13, opacity: 0.95 }}>
                Private family group
              </div>
            </div>
          </div>
        </div>

        <div style={styles.gridWrap}>
          <aside style={styles.leftCol}>
            <div style={{ position: "sticky", top: 24 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={styles.smallTextMuted}>Family Photos</div>
                <div style={styles.thumbGrid}>
                  {family.members.slice(0, 6).map((m, i) => (
                    <img
                      key={i}
                      src={m.avatar}
                      alt={`member-${m.name}`}
                      style={{
                        ...styles.thumbImg,
                        borderRadius: "50%",
                        height: 65,
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* <div style={{ marginTop: 16 }}>
                <h4 style={styles.smallTextMuted}>Quick Info</h4>
                <div style={{ marginTop: 8, fontSize: 14, color: "#374151" }}>
                  <div>
                    <strong>Members:</strong> {family.members.length}
                  </div>
                  <div>
                    <strong>Albums:</strong> 2
                  </div>
                  <div>
                    <strong>Events:</strong> 1
                  </div>
                </div>
              </div> */}
            </div>
          </aside>

          <nav style={styles.navCol}>
            <div
              style={{
                position: "sticky",
                top: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {menu.map((m) => (
                <button
                  key={m}
                  onClick={() => setActive(m)}
                  style={styles.menuButton(active === m)}
                >
                  <div style={styles.menuBadge}>{m[0]}</div>
                  <div style={{ flex: 1 }}>{m}</div>
                  <div style={{ color: "#9CA3AF", fontSize: 14 }}>›</div>
                </button>
              ))}
            </div>
          </nav>

          <main style={styles.mainCol}>
            <div style={styles.headerSticky}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2 style={{ fontSize: 16, fontWeight: 600 }}>{active}</h2>
              </div>
              <div style={styles.divider} />
            </div>

            {renderContent()}
          </main>
        </div>
      </div>
      {selectedMember && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedMember(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="close"
              style={styles.modalClose}
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            <MemberDetails
              member={selectedMember}
              onAddEducation={(edu) =>
                addEducationToMember(selectedMember.name, edu)
              }
              onUpdateMember={(updates) =>
                updateMemberInfo(selectedMember.name, updates)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Post({ author, text }) {
  const styles = {
    card: {
      padding: 12,
      backgroundColor: "#F9FAFB",
      borderRadius: 8,
      border: "1px solid #F3F4F6",
    },
    row: { display: "flex", alignItems: "flex-start", gap: 12 },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      backgroundColor: "#E5E7EB",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
    },
    author: { fontSize: 14, fontWeight: 600 },
    text: { fontSize: 14, color: "#4B5563", marginTop: 6 },
    ts: { fontSize: 12, color: "#9CA3AF", marginTop: 8 },
  };

  return (
    <article style={styles.card}>
      <div style={styles.row}>
        <div style={styles.avatar}>{author[0]}</div>
        <div>
          <div style={styles.author}>{author}</div>
          <div style={styles.text}>{text}</div>
          <div style={styles.ts}>2 hours ago</div>
        </div>
      </div>
    </article>
  );
}

function EventCard({ title, date, desc }) {
  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontWeight: 600 }}>{title}</div>
          <div style={{ fontSize: 13, color: "#6B7280" }}>{date}</div>
        </div>
        <div style={{ color: "#9CA3AF", fontSize: 14 }}>›</div>
      </div>
      <div style={{ fontSize: 14, color: "#4B5563", marginTop: 8 }}>{desc}</div>
    </div>
  );
}

function AlbumCard({ title, photos }) {
  return (
    <div
      style={{
        padding: 12,
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 64,
          height: 48,
          backgroundColor: "#E5E7EB",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {photos}
      </div>
      <div>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#6B7280" }}>{photos} photos</div>
      </div>
    </div>
  );
}

function MemberDetails({ member }) {
  const s = {
    wrap: {
      maxWidth: 820,
      margin: "0 auto",
      color: "#111827",
      textAlign: "left",
    },
    header: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      padding: 16,
      borderRadius: 12,
      background: "linear-gradient(135deg,#fff 0%, #f8fafc 100%)",
      boxShadow: "0 6px 20px rgba(15,23,42,0.06)",
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: 9999,
      objectFit: "cover",
      boxShadow: "0 8px 20px rgba(2,6,23,0.12)",
      border: "4px solid #fff",
    },
    name: { fontSize: 18, fontWeight: 700, lineHeight: 1.1 },
    meta: { color: "#6B7280", fontSize: 13 },
    section: {
      marginTop: 14,
      borderRadius: 10,
      padding: 12,
      background: "#fff",
      boxShadow: "0 4px 12px rgba(2,6,23,0.04)",
    },
    edCard: {
      padding: 10,
      borderRadius: 8,
      background: "#F8FAFC",
      border: "1px solid #EEF2F6",
    },
    inlineForm: { display: "flex", gap: 8, marginTop: 10 },
    input: {
      padding: 10,
      borderRadius: 8,
      border: "1px solid #E6EEF3",
      outline: "none",
      background: "#fff",
    },
    btnPrimary: {
      padding: "8px 12px",
      borderRadius: 8,
      border: "none",
      background: "linear-gradient(90deg,#111827,#374151)",
      color: "#fff",
      cursor: "pointer",
    },
    btnGhost: {
      padding: "8px 12px",
      borderRadius: 8,
      border: "1px solid #E5E7EB",
      background: "#fff",
      cursor: "pointer",
    },
    smallMuted: { fontSize: 13, color: "#9CA3AF" },
  };

  return (
    <div style={s.wrap}>
      <div style={s.header}>
        <img src={member.avatar} alt={member.name} style={s.avatar} />
        <div style={{ flex: 1 }}>
          <div style={s.name}>{member.name}</div>
          <div style={s.meta}>{member.relation}</div>
          <div style={{ marginTop: 6, ...s.smallMuted }}>
            Birthday: {formatDate(member.birthday)}
          </div>
        </div>
      </div>

      <div style={s.section}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 700 }}>About</div>
        </div>
      </div>

      <div style={{ ...s.section, marginTop: 12 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 700 }}>Education</div>
        </div>

        <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
          {(member.education || []).map((ed, i) => (
            <div key={i} style={s.edCard}>
              <div style={{ fontWeight: 600 }}>{ed.school}</div>
              {ed.year && <div style={s.smallMuted}>{ed.year}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDate(d) {
  if (!d) return "";
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString();
  } catch (e) {
    return d;
  }
}
